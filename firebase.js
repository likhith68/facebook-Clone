import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBtiNboLwIlLiMiovmv2NtyfO9FNA5qASE",
    authDomain: "facebook-clone-9ca9f.firebaseapp.com",
    projectId: "facebook-clone-9ca9f",
    storageBucket: "facebook-clone-9ca9f.appspot.com",
    messagingSenderId: "607680987653",
    appId: "1:607680987653:web:cf5651aa40c97eabb4d26c",
    measurementId: "G-ECK9C32VJN"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const app=!getApps().length?initializeApp(firebaseConfig):getApp()
const storage = getStorage();

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const db = app.firestore();
// const storage = firebase.storage();
export { app, db, storage };