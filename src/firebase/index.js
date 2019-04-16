import * as firebase from "firebase";
import "firebase/firestore";
import "./";

const config = {
  apiKey: "AIzaSyBqhHQFBEw0z6P6rV9IIgNt5HcerZDrgDM",
  authDomain: "senior-project-5c02e.firebaseapp.com",
  databaseURL: "https://senior-project-5c02e.firebaseio.com",
  projectId: "senior-project-5c02e",
  storageBucket: "senior-project-5c02e.appspot.com",
  messagingSenderId: "132624958734"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
