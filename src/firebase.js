import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGM6zAZrGvVYujEJiftRsAjItbuPPsBPY",
  authDomain: "expense-manager-853e0.firebaseapp.com",
  projectId: "expense-manager-853e0",
  storageBucket: "expense-manager-853e0.appspot.com",
  messagingSenderId: "354412907062",
  appId: "1:354412907062:web:83a520bc02efe2f626e697",
  measurementId: "G-FPB6R5BZWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
