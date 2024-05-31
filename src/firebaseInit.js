// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-YXGAbsow5c81Yp5OS56vOiQFOgKO9Qw",
  authDomain: "photo-folio-c7aea.firebaseapp.com",
  projectId: "photo-folio-c7aea",
  storageBucket: "photo-folio-c7aea.appspot.com",
  messagingSenderId: "666952856518",
  appId: "1:666952856518:web:ddd4b6d5cebba383ff38c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);