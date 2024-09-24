import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyCXm7mjj8iQgqSHJ1pnGkGZKSQuaWk0vXI",
  authDomain: "rapid-resume-392bd.firebaseapp.com",
  projectId: "rapid-resume-392bd",
  storageBucket: "rapid-resume-392bd.appspot.com",
  messagingSenderId: "222109125790",
  appId: "1:222109125790:web:fa57d5446ee648f1c27f8f",
  measurementId: "G-SSJB5Q5542",
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
auth.languageCode = 'it'
export const provider = new GoogleAuthProvider();






