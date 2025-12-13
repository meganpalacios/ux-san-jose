// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEGRHdjzEhjppsPH-2CUCGzMj-yrrK1A",
  authDomain: "ux-san-jose.firebaseapp.com",
  projectId: "ux-san-jose",
  storageBucket: "ux-san-jose.firebasestorage.app",
  messagingSenderId: "1041194407314",
  appId: "1:1041194407314:web:e95103149b0ef4c60b1d4b",
  measurementId: "G-62S98NPJ09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);