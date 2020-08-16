// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_flY9Kb_nHC8_UsnrMjVY7bKs8cU7VwQ",
  authDomain: "mymalltutorialproject.firebaseapp.com",
  databaseURL: "https://mymalltutorialproject.firebaseio.com",
  projectId: "mymalltutorialproject",
  storageBucket: "mymalltutorialproject.appspot.com",
  messagingSenderId: "29876325148",
  appId: "1:29876325148:web:b9f1fed1aa0ac5ebad48d9",
  measurementId: "G-J1SLZ98JN1",
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
