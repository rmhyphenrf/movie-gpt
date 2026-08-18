// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAXFi_6txePstDWVG06GeHxen8EuiRNLg",
  authDomain: "moviq-gpt.firebaseapp.com",
  projectId: "moviq-gpt",
  storageBucket: "moviq-gpt.firebasestorage.app",
  messagingSenderId: "274090536958",
  appId: "1:274090536958:web:6e130681427e3dd4979aaf",
  measurementId: "G-PYB0KV105R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
