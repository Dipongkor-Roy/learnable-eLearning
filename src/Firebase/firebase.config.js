// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9TuGwTs0s51xxDCUJlcI-WHwNBSUVjoo",
  authDomain: "travelly-travel-website.firebaseapp.com",
  projectId: "travelly-travel-website",
  storageBucket: "travelly-travel-website.appspot.com",
  messagingSenderId: "854020698187",
  appId: "1:854020698187:web:05f3da15f643acac4dddce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;