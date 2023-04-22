
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqv9bbZUmlUXQXBfPwlOFFXBuaahDsWtM",
  authDomain: "phone-auth-f4573.firebaseapp.com",
  projectId: "phone-auth-f4573",
  storageBucket: "phone-auth-f4573.appspot.com",
  messagingSenderId: "739562097330",
  appId: "1:739562097330:web:336b999ea76eb1afa897ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
