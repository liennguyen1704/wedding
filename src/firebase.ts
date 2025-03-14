// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3CB9G6J-Wlyt4op5-zBKYcLvetvHldZM",
  authDomain: "wedding-54dba.firebaseapp.com",
  projectId: "wedding-54dba",
  storageBucket: "wedding-54dba.firebasestorage.app",
  messagingSenderId: "775772138420",
  appId: "1:775772138420:web:6ef8c2e85b8c8fa8e620e1",
  measurementId: "G-75H17NFWK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
