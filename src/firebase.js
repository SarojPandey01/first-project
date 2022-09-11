import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUFdQlu3jcV37FAvwY2psHU9Zuu9K8AgU",
  authDomain: "todo-list-first-project-b03f2.firebaseapp.com",
  projectId: "todo-list-first-project-b03f2",
  storageBucket: "todo-list-first-project-b03f2.appspot.com",
  messagingSenderId: "721821746365",
  appId: "1:721821746365:web:3d1c95475fc69bac7a63d4",
  measurementId: "G-C6206YHXLL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;