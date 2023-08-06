import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';

const apikeyNum = process.env.REACT_APP_API_KEY_FIREBASE;
const authDomain = process.env.REACT_APP_AUTHDOMAIN_FIREBASE;
const projectId = process.env.REACT_APP_PROJECTID_FIREBASE;
const storageBucket = process.env.REACT_APP_STORAGEBUCKET_FIREBASE;
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE;
const appId = process.env.REACT_APP_APPID_FIREBASE;

const firebaseConfig = {
  apiKey: apikeyNum,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export { db };
