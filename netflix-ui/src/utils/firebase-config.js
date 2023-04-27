import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZXbdfEvGzvyzoqPiaMC0gjo-qYWJEw5E",
  authDomain: "react-netflix-clone-3832f.firebaseapp.com",
  projectId: "react-netflix-clone-3832f",
  storageBucket: "react-netflix-clone-3832f.appspot.com",
  messagingSenderId: "99779757894",
  appId: "1:99779757894:web:135b18aac93f643c638747",
  measurementId: "G-232NY8RNPM",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
