// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_DuKUcz9ct4wbEJ_6J323I5asGWM_aeY",
  authDomain: "nendonest.firebaseapp.com",
  projectId: "nendonest",
  storageBucket: "nendonest.appspot.com",
  messagingSenderId: "204441307845",
  appId: "1:204441307845:web:e6161de3303e0434cd3eac",
  measurementId: "G-81KMPE65XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider }
