import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1uC9I5UEsykhnhSctE57ZHVjv-eMWlJI",
  authDomain: "chatbox-aws.firebaseapp.com",
  projectId: "chatbox-aws",
  storageBucket: "chatbox-aws.appspot.com",
  messagingSenderId: "1019845618499",
  appId: "1:1019845618499:web:2703ab41a2027d19e79df6",
  measurementId: "G-M5KYMPKHVK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
