// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDXhxWn19C6fwkT_131YogVc1bZv6gS_U",
  authDomain: "moto-dealer.firebaseapp.com",
  projectId: "moto-dealer",
  storageBucket: "moto-dealer.appspot.com",
  messagingSenderId: "738629083874",
  appId: "1:738629083874:web:82dd65c624cd525b6a34bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
