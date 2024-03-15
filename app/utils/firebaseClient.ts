// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3yGfcsbsLUgTV778-4ANIxOPC5bhd3i0",
  authDomain: "fishandfish-26f47.firebaseapp.com",
  projectId: "fishandfish-26f47",
  storageBucket: "fishandfish-26f47.appspot.com",
  messagingSenderId: "1012012742009",
  appId: "1:1012012742009:web:cf93a925e567a3b4932ba8",
  measurementId: "G-M6HQGYJ71N"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export default app;