
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDGFEAT3yyDGLW_HtCXRP1BbpcJanyl1o",
  authDomain: "nextjs-firebase-auth-7bc43.firebaseapp.com",
  projectId: "nextjs-firebase-auth-7bc43",
  storageBucket: "nextjs-firebase-auth-7bc43.appspot.com",
  messagingSenderId: "1052283772181",
  appId: "1:1052283772181:web:6f1ca715559a2d1a2b1d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
