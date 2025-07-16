// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // VITE_FIRBASE_API_KEY stroe hai .env ,me
  authDomain: "news-portal-72e4f.firebaseapp.com",
  projectId: "news-portal-72e4f",
  storageBucket: "news-portal-72e4f.firebasestorage.app",
  messagingSenderId: "343506748509",
  appId: "1:343506748509:web:99eb830b37b7fb678b79b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
