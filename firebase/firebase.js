// Import the functions you need from the SDKs you need
import e from "cors";
import { firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsT_S1xs3_iWSn57DZmWkAE7DDDnB8QXw",
  authDomain: "microservice-firebase-comments.firebaseapp.com",
  projectId: "microservice-firebase-comments",
  storageBucket: "microservice-firebase-comments.appspot.com",
  messagingSenderId: "311195379027",
  appId: "1:311195379027:web:b35b55f43f19b6be71eda6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = {firebase}