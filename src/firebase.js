import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDGFypEz_wYCz5Dpj6B4rD9bPY-zMR-og",
  authDomain: "twitter-clone-139e5.firebaseapp.com",
  projectId: "twitter-clone-139e5",
  storageBucket: "twitter-clone-139e5.appspot.com",
  messagingSenderId: "1013089296360",
  appId: "1:1013089296360:web:a230f744a26faea8ec4e5d",
  measurementId: "G-MES5F5NKZW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
