// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwDrdWsm9UyxkEJWuf7RLkdQB_F9vqT2I",
  authDomain: "messanger-b9d4f.firebaseapp.com",
  projectId: "messanger-b9d4f",
  storageBucket: "messanger-b9d4f.appspot.com",
  messagingSenderId: "1007644779611",
  appId: "1:1007644779611:web:944d262cdab7c6bb678b7e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };