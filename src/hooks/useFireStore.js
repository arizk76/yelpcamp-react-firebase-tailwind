import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const fireApp = initializeApp(firebaseConfig);

export const db = getFirestore(fireApp);

export const useFireStore = () => {
  const addUser = (name, email, uid) => {
    console.log(uid);
    return addDoc(collection(db, 'users'), {
      userID: uid,
      name: name,
      email: email,
    });
  };

  return {
    addUser,
  };
};
