// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc27VXaQE_uovlqLMJbB_cNZ-eXfljjzI",
  authDomain: "abishekflix.firebaseapp.com",
  projectId: "abishekflix",
  storageBucket: "abishekflix.appspot.com",
  messagingSenderId: "149246299970",
  appId: "1:149246299970:web:284f8bd23a30c7f6ec42db",
  measurementId: "G-TE4NMQQ6RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();