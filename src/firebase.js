// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl2Po8BjSkJWrNNbekrXmCQlU3ORD2XSU",
  authDomain: "girofipe.firebaseapp.com",
  projectId: "girofipe",
  storageBucket: "girofipe.firebasestorage.app",
  messagingSenderId: "224441549941",
  appId: "1:224441549941:web:c215451756ea6af554e43c",
  measurementId: "G-GMTZ1VZK0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);