// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Add a new document with a generated id.
const handle= async()=>{
    // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "firedb"), {
  
  
});
console.log("Document written with ID: ", docRef.id)
}

const firebaseConfig ={
    apiKey: "AIzaSyBDJRsgYZYeMogZCVeBgGfa0oh8VA41W6U",
    authDomain: "fir-db-c108f.firebaseapp.com",
    projectId: "fir-db-c108f",
    storageBucket: "fir-db-c108f.appspot.com",
    messagingSenderId: "233832031233",
    appId: "1:233832031233:web:1b429f887d071176d04c00",
    measurementId: "G-9HJ6MKNJY5"
  
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const db = getFirestore();
export default db