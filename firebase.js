import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCwOJH0nAyF0wY7a_zpNp06DvV-YkKVeEE",
    authDomain: "crimemap-6b43a.firebaseapp.com",
    projectId: "crimemap-6b43a",
    storageBucket: "crimemap-6b43a.appspot.com",
    messagingSenderId: "459699115750",
    appId: "1:459699115750:web:eb8ba7e2aab78a30f30d27",
    measurementId: "G-MBLC9V7KQC"
};
//console.log("rob drehmann")

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();


export const db = firebase.firestore();