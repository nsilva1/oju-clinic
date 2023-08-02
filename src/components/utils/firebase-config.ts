import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase, } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyAMhAgqY0b9nkEW67cs2KOoGHajlu_JhnU",
  authDomain: "oju-clinic-75e03.firebaseapp.com",
  projectId: "oju-clinic-75e03",
  storageBucket: "oju-clinic-75e03.appspot.com",
  messagingSenderId: "847605953559",
  appId: "1:847605953559:web:336618d22c37ac3a6e9852",
  measurementId: "G-LCS2BLZKMK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app); 
export const database = getDatabase(app)