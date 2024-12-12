
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeGLqDFgjrEKS-OcTWS4hysULV7W_CZYc",
  authDomain: "pflex-pf.firebaseapp.com",
  projectId: "pflex-pf",
  storageBucket: "pflex-pf.firebasestorage.app",
  messagingSenderId: "420822635627",
  appId: "1:420822635627:web:3fc008f218b91d7ab88d2e",
  measurementId: "G-3QWPQQZD8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);