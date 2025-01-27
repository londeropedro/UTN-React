// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUw9uWpyq94BE-VBGcHWJM2yaPUPWtjaA",
  authDomain: "elpalaciodelapapafrita-55922.firebaseapp.com",
  projectId: "elpalaciodelapapafrita-55922",
  storageBucket: "elpalaciodelapapafrita-55922.firebasestorage.app",
  messagingSenderId: "1015264583771",
  appId: "1:1015264583771:web:69162fa705512d578a1f7e",
  measurementId: "G-8FPJCGQMQP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Log para validar la conexión a la base de datos
console.log("Conexión a Firestore establecida:", db);

export default db;