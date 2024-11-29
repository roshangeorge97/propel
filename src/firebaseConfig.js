// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSj_U9-n5h-ocbTaHab0rq6OcJ1RNIx3w",
  authDomain: "invest-d282c.firebaseapp.com",
  projectId: "invest-d282c",
  storageBucket: "invest-d282c.firebasestorage.app",
  messagingSenderId: "776205810977",
  appId: "1:776205810977:web:6ee9eff7798f79e59bd260",
  measurementId: "G-9V43LCDQXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);