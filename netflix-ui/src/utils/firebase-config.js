// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

  apiKey: "AIzaSyDRA--GraiEnM8jIjffbTHW1kpsQ3JUGSA",

  authDomain: "netflix-clone-ffec1.firebaseapp.com",

  projectId: "netflix-clone-ffec1",

  storageBucket: "netflix-clone-ffec1.appspot.com",

  messagingSenderId: "1060029574941",

  appId: "1:1060029574941:web:d11661896e15a9e852bbf4",

  measurementId: "G-VT65D2ETKB"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);