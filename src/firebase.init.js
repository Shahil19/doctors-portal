// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANffe2xz5QvGqQtD2r5PjxPPjcAizXrTU",
    authDomain: "doctors-portal-f354e.firebaseapp.com",
    projectId: "doctors-portal-f354e",
    storageBucket: "doctors-portal-f354e.appspot.com",
    messagingSenderId: "1091789297650",
    appId: "1:1091789297650:web:4daca9e5fae724b97c3d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth