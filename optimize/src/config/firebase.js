// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJKTWekOlS8Q9tUmlVGbDZ3z-jbb_NJnI",
  authDomain: "database-756b0.firebaseapp.com",
  projectId: "database-756b0",
  storageBucket: "database-756b0.firebasestorage.app",
  messagingSenderId: "283331444989",
  appId: "1:283331444989:web:27f5930a1f8ba63872be94",
  measurementId: "G-KJEWZ1Y2Q7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db = getFirestore(app);

export const googleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const signupWithEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
