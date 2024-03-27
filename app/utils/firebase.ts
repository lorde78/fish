import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3yGfcsbsLUgTV778-4ANIxOPC5bhd3i0",
  authDomain: "fishandfish-26f47.firebaseapp.com",
  projectId: "fishandfish-26f47",
  storageBucket: "fishandfish-26f47.appspot.com",
  messagingSenderId: "1012012742009",
  appId: "1:1012012742009:web:cf93a925e567a3b4932ba8",
  measurementId: "G-M6HQGYJ71N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);