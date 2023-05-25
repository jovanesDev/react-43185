// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7IowjZu2YgnUhrv7Y2oMBQdFwIXQWOMs",
  authDomain: "proyecto-43185.firebaseapp.com",
  projectId: "proyecto-43185",
  storageBucket: "proyecto-43185.appspot.com",
  messagingSenderId: "1090445916550",
  appId: "1:1090445916550:web:d42cd4bf40c9868623d407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)