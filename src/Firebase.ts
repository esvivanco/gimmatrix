// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyAxvy5Ya9ENFiLpo71nRbNrWtSm0xKEi8o",
    authDomain: "vivanvi-ca0c7.firebaseapp.com",
    projectId: "vivanvi-ca0c7",
    storageBucket: "vivanvi-ca0c7.appspot.com",
    messagingSenderId: "705730990926",
    appId: "1:705730990926:web:d94886610672397454041f",
    measurementId: "G-Q3EQR8XP1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();