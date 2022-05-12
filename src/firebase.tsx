import React, { useEffect, useMemo, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseError } from '@firebase/util';
import { FirebaseContext } from '@/contexts';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
export const app = firebase.initializeApp(firebaseConfig);

export const loginWithEmail = async (email: string, password: string) => {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
  } catch (error: unknown) {
    switch ((error as FirebaseError).code) {
      case 'auth/invalid-email':
        throw Error('メールアドレスの形式が間違っています');
      case 'auth/user-disabled':
        throw Error('ユーザーが無効になっています');
      case 'auth/user-not-found':
        throw Error('ユーザーが見つかりません');
      case 'auth/wrong-password':
        throw Error('パスワードが間違っています');
      case 'auth/too-many-requests':
        throw Error(
          'パスワードを複数回間違えたため、アカウントがロックされました。時間をおいてから再度ログインしてください'
        );
      default:
        throw Error('エラーが発生しました。時間をおいてから再度ログインしてください');
    }
  }
};

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    switch ((error as FirebaseError).code) {
      case 'auth/cancelled-popup-request':
      case 'auth/popup-closed-by-user':
        return;
      case 'auth/auth-domain-config-required':
      case 'auth/operation-not-allowed':
      case 'auth/operation-not-supported-in-this-environment':
      case 'auth/unauthorized-domain':
        throw Error('現在この認証方法はご利用いただけません');
      case 'auth/popup-blocked':
        throw Error('認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください');
      default:
        throw Error('エラーが発生しました。時間をおいてから再度ログインしてください');
    }
  }
};

export const signupWithEmail = async (email: string, password: string) => {
  try {
    await app.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    switch ((error as FirebaseError).code) {
      case 'auth/email-already-in-use':
        throw Error('すでに登録しているメールアドレスです');
      case 'auth/invalid-email':
        throw Error('メールアドレスの形式が間違っています');
      case 'auth/operation-not-allowed':
        throw Error('この認証方法はご利用いただけません');
      case 'auth/weak-password':
        throw Error('パスワードは6文字以上にしてください');
      default:
        throw Error('エラーが発生しました。時間をおいてから再度ログインしてください');
    }
  }
};

export const logout = async () => {
  await app.auth().signOut();
};

export const resetPassword = async (email: string) => {
  const actionCodeSettings = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    url: `${process.env.REACT_APP_MAIL_URL!}?email=${email}`,
  };
  try {
    await app.auth().sendPasswordResetEmail(email, actionCodeSettings);
  } catch (error: unknown) {
    switch ((error as FirebaseError).code) {
      case 'auth/invalid-email':
        throw Error('メールアドレスの形式が間違っています');
      case 'auth/user-not-found':
        throw Error('ユーザーが見つかりません');
      default:
        throw Error('エラーが発生しました。時間をおいてから再度ログインしてください');
    }
  }
};

export const db = firebase.firestore();
firebase.firestore().settings({
  ignoreUndefinedProperties: true,
  merge: true,
});

export const fetchWishList = async () => {
  let data;
  try {
    const user = firebase.auth().currentUser;
    if (!user) return undefined;
    const { uid } = user;
    const snapShot = await db.collection(`/users/${uid}/wishList`).get();
    data = snapShot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
  return data;
};

export const fetchWishListByRating = async () => {
  let data;
  try {
    const user = firebase.auth().currentUser;
    if (!user) return undefined;
    const { uid } = user;
    const snapShot = await db.collection(`/users/${uid}/wishList`).orderBy('rating', 'desc').get();
    data = snapShot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
  return data;
};

export const fetchWishListByName = async (name: string) => {
  const data = (await fetchWishList()) as ShopInfo[];
  if (!data) return undefined;
  const filteredData = data.filter((shopInfo: ShopInfo) => {
    if (!shopInfo.name) return false;
    return shopInfo.name.toLowerCase().indexOf(name) > -1;
  });
  return filteredData;
};

export type ShopInfo = {
  placeId: string | undefined;
  name: string | undefined;
  rating: number | undefined;
  phoneNumber: string | undefined;
  website: string | undefined;
  weekdayText: string[] | undefined;
  address: string | undefined;
  position: google.maps.LatLng | google.maps.LatLngLiteral;
};

export const addWishList = async (shopInfo: ShopInfo) => {
  try {
    const user = firebase.auth().currentUser;
    if (!user) return;
    const { uid } = user;
    await db.collection(`/users/${uid}/wishList`).add(shopInfo);
  } catch (error) {
    console.log(error);
  }
};

export const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  if (loading) {
    return <div className="loading">ローディング中...</div>;
  }

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};
