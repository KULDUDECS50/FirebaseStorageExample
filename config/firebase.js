import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBWbhZTSEf_cIHRcJxSgkmKJ-XGycNQFE",
  authDomain: "fir-storageexample-a548f.firebaseapp.com",
  projectId: "fir-storageexample-a548f",
  storageBucket: "fir-storageexample-a548f.appspot.com",
  messagingSenderId: "155990805149",
  appId: "1:155990805149:web:9ecab200f974e3cfb32274"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);
export {app, firebase}