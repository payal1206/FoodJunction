// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";
// var storage = firebase.storage();
// export default storage;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPkwiQM7yF_YNsGaUWLMKVzCKEm4MG5bw",
  authDomain: "foodhub-aa47d.firebaseapp.com",
  projectId: "foodhub-aa47d",
  storageBucket: "foodhub-aa47d.appspot.com",
  messagingSenderId: "556782061229",
  appId: "1:556782061229:web:aae7dfee2a8145a72ee824",
  measurementId: "G-ZFWGEKWRD5"
};
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = firebase.storage();
