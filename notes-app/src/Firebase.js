// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMQ-3KweUslqXT8KRrRbLz3-56Uad6t4U",
  authDomain: "react-notes-4df36.firebaseapp.com",
  projectId: "react-notes-4df36",
  storageBucket: "react-notes-4df36.appspot.com",
  messagingSenderId: "542488574650",
  appId: "1:542488574650:web:52a8ea380bb4c9f6706083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  // create firestore item
 export const notesCollection = collection(db,'notes')