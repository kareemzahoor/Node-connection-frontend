import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const facebook_provider = new FacebookAuthProvider();
facebook_provider.addScope("user_photos");
const google_provider = new GoogleAuthProvider();

export {
  getAuth,
  createUserWithEmailAndPassword,
  facebook_provider,
  google_provider,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
};
