// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC68xVaTXi5zglFGLNuNdLinXs1rUvhU24",
  authDomain: "rent-a-bike-386006.firebaseapp.com",
  projectId: "rent-a-bike-386006",
  storageBucket: "rent-a-bike-386006.appspot.com",
  messagingSenderId: "517473720828",
  appId: "1:517473720828:web:003673e28e34bc89023a79",
  measurementId: "G-YGN3H16JP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);