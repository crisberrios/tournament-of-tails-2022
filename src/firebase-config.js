import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAoQAEaFXydEmvRttMHPQqH6N3UMhqgbw',
  authDomain: 'tournament-of-tails.firebaseapp.com',
  databaseURL: 'https://tournament-of-tails.firebaseio.com',
  projectId: 'tournament-of-tails',
  storageBucket: 'tournament-of-tails.appspot.com',
  messagingSenderId: '660262587596',
  appId: '1:660262587596:web:04b20bdc1bd1762ea84669',
  measurementId: 'G-KN8DNWMDPP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
