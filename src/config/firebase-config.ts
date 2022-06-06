// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKzBDN7DWgwoaD5nkX9MZy4Jq5WpEKW4Y",
  authDomain: "live-stream-web.firebaseapp.com",
  projectId: "live-stream-web",
  storageBucket: "live-stream-web.appspot.com",
  messagingSenderId: "199289205830",
  appId: "1:199289205830:web:5b7b90851d51a5e6d3c647",
  measurementId: "G-73VYNP7F2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app)