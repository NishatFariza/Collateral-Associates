// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyB8ytwapiocPxhLmEcA6YWLVt3q99YP0",
  authDomain: "collateral-associates-10.firebaseapp.com",
  projectId: "collateral-associates-10",
  storageBucket: "collateral-associates-10.appspot.com",
  messagingSenderId: "742758285254",
  appId: "1:742758285254:web:9f9928f2a58c1e53ed7cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;