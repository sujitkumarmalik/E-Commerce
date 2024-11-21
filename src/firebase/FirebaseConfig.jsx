// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArcY7ArHrX2MOC0tJLU4dyyeCH79HE-Vg",
  authDomain: "myfirstapp-e77f3.firebaseapp.com",
  projectId: "myfirstapp-e77f3",
  storageBucket: "myfirstapp-e77f3.firebasestorage.app",
  messagingSenderId: "1059121612437",
  appId: "1:1059121612437:web:a4dc3776b796555c0cfd9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth= getAuth(app);

export {fireDB, auth}