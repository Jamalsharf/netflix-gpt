// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvfqLIKcvX97DvOGm3XWTjYL_i4WpgmoI",
  authDomain: "netflixgpt-c4af5.firebaseapp.com",
  projectId: "netflixgpt-c4af5",
  storageBucket: "netflixgpt-c4af5.appspot.com",
  messagingSenderId: "330333514977",
  appId: "1:330333514977:web:c421f9ffc44167f1a49ba0",
  measurementId: "G-EP0RLKSV95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
