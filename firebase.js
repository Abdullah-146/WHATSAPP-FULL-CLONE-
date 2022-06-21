// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNcbnmdtBz8btaKhBa4jq72CfRYK2cfps",
  authDomain: "whatsapp-clone-966fa.firebaseapp.com",
  projectId: "whatsapp-clone-966fa",
  storageBucket: "whatsapp-clone-966fa.appspot.com",
  messagingSenderId: "345483517753",
  appId: "1:345483517753:web:f1f65e789fde83cbe4d2e8",
  measurementId: "G-M7PKBEFYD9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
