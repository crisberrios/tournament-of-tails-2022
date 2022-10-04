import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD45fcRM5dRPxu4Kt7JROgaWOku-fdmQa4",
  authDomain: "ppes-tot-2022.firebaseapp.com",
  projectId: "ppes-tot-2022",
  storageBucket: "ppes-tot-2022.appspot.com",
  messagingSenderId: "525404609516",
  appId: "1:525404609516:web:522cd68ecdfdafc2273ec9",
  databaseURL: "https://tournament-of-tails.firebaseio.com---",
  measurementId: "G-KN8DNWMDPPOOOO",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
