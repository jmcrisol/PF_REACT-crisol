// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxE-kXXkS08w_UGsEr-iVd2o3CRPyr0O8",
  authDomain: "mushiditos-ecae3.firebaseapp.com",
  projectId: "mushiditos-ecae3",
  storageBucket: "mushiditos-ecae3.appspot.com",
  messagingSenderId: "618829975731",
  appId: "1:618829975731:web:0cfc3f91dfe41f4ca9e0c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);