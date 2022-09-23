// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR1BBCZWTolimPxcc9i6SuCL4oJNU6FlU",
  authDomain: "random-dogs-c8588.firebaseapp.com",
  projectId: "random-dogs-c8588",
  storageBucket: "random-dogs-c8588.appspot.com",
  messagingSenderId: "32589480741",
  appId: "1:32589480741:web:664a79fb008a049b10d0cc",
  measurementId: "G-V0Q94NK15K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
