// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNP2mQr74d1FAE_bSK2tynf7OhNlsQdn0",
  authDomain: "netflix-gpt-9cd7d.firebaseapp.com",
  projectId: "netflix-gpt-9cd7d",
  storageBucket: "netflix-gpt-9cd7d.appspot.com",
  messagingSenderId: "454261961672",
  appId: "1:454261961672:web:a6d176d1c1e41e5d5c06fd",
  measurementId: "G-BPFSZYRLY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);