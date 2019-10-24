import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8gfxr0Y_ZDUh0P1hXKfBON5KfC_jGHNo",
  authDomain: "petvillage-6e30e.firebaseapp.com",
  databaseURL: "https://petvillage-6e30e.firebaseio.com",
  projectId: "petvillage-6e30e",
  storageBucket: "petvillage-6e30e.appspot.com",
  messagingSenderId: "297651374289",
  appId: "1:297651374289:web:3c5ae8dbdd659e52eb1df0",
  measurementId: "G-SSZPES98NY"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default firebase;
