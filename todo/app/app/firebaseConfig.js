// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrNCZ91i4PcJoPcAoMhF_1ANnVmErDvo",
  authDomain: "todo-734ce.firebaseapp.com",
  projectId: "todo-734ce",
  storageBucket: "todo-734ce.firebasestorage.app",
  messagingSenderId: "79008318508",
  appId: "1:79008318508:web:dbc7c82af20344e4043d89",
  measurementId: "G-Y7BW5RMZKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const db = getFirestore(app);


export async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      Middle: "M",
      Gender: "F",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

