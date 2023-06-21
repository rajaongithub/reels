// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA70XCHhg8b2Rfv4aoD4TQzJmRxz0BM0X0",
  authDomain: "temp-d8426.firebaseapp.com",
  projectId: "temp-d8426",
  storageBucket: "temp-d8426.appspot.com",
  messagingSenderId: "51673804245",
  appId: "1:51673804245:web:a18a5b41320fb2a60ca15c",
  measurementId: "G-ZRTRT724CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { auth,storage,db }
export default app;