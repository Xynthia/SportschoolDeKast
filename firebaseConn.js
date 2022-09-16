// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP4evFmyzZ2pk9gjxoW8rjJoyNh60Jpog",
  authDomain: "sportschool-de-kast.firebaseapp.com",
  projectId: "sportschool-de-kast",
  storageBucket: "sportschool-de-kast.appspot.com",
  messagingSenderId: "5834013326",
  appId: "1:5834013326:web:f6ab08c7797df2207167df",
  measurementId: "G-0EMTBPXFLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
