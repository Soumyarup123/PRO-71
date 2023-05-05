import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAhG3FfplDFPeu48xMjaWziFDsagt5wJnc",
  authDomain: "pro-c71-3b1f1.firebaseapp.com",
  projectId: "pro-c71-3b1f1",
  storageBucket: "pro-c71-3b1f1.appspot.com",
  messagingSenderId: "957227136544",
  appId: "1:957227136544:web:01f27e11d7352225a62e45"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
