// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9HEgJxyGAL21p1dYVGtEl8wGrAqtMsXo",
  authDomain: "resumestore-ffead.firebaseapp.com",
  projectId: "resumestore-ffead",
  storageBucket: "resumestore-ffead.appspot.com",
  messagingSenderId: "793763899551",
  appId: "1:793763899551:web:696d870d9bc05397f09aaa",
  measurementId: "G-DQYSLYYVFV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
