// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHIzylmLGPL3OfcEnyfVhAm_blLSyge8",
  authDomain: "endorseapp-b1429.firebaseapp.com",
  projectId: "endorseapp-b1429",
  storageBucket: "endorseapp-b1429.firebasestorage.app",
  messagingSenderId: "1012665723139",
  appId: "1:1012665723139:web:0e6649701dc4e478262136",
  measurementId: "G-06CZZNXSN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
