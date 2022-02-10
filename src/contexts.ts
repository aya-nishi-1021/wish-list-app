import React from 'react';
import firebase from 'firebase/compat/app';

type FirebaseContextType = {
  user: firebase.User | null;
};

export const FirebaseContext = React.createContext<FirebaseContextType>({
  user: null,
});
