// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWp9HxZVa9egfOBngU8zbV_7KGBAkb6Pw",
    authDomain: "aquaware-8a1bf.firebaseapp.com",
    projectId: "aquaware-8a1bf",
    storageBucket: "aquaware-8a1bf.appspot.com",
    messagingSenderId: "54002167875",
    appId: "1:54002167875:web:1b381ec4b806bd1a42a4f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Database
export const db = getFirestore(app);
export const measuringRef = collection(db, 'measurings');