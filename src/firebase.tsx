import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseContext } from './contexts';

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
  } catch (error) {
    console.log(error);
  }
};

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.log(error);
  }
};

export const signupWithEmail = async (email: string, password: string) => {
  try {
    await app.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  await app.auth().signOut();
};

export const resetPassword = (email: string) => {
  const actionCodeSettings = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    url: `${process.env.REACT_APP_MAIL_URL!}?email=${email}`,
  };
  return app.auth().sendPasswordResetEmail(email, actionCodeSettings);
};

export const db = firebase.firestore();
firebase.firestore().settings({
  ignoreUndefinedProperties: true,
  merge: true,
});

export const fetchWishList = async () => {
  let data;
  try {
    const snapShot = await db.collection('wishList').get();
    data = snapShot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
  return data;
};

export const fetchWishListByRating = async () => {
  let data;
  try {
    const snapShot = await db.collection('wishList').orderBy('rating', 'desc').get();
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
  images: string[];
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
    await db.collection('wishList').add(shopInfo);
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

  if (loading) {
    return <div className="loading">ローディング中...</div>;
  }

  return (
    <FirebaseContext.Provider
      // eslint-disable-next-line
      value={{
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
