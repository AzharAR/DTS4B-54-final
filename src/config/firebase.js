// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDB4CaHJ4UOC8gxP9vS9RYt40ZlRf2RJrA",
   authDomain: "rea4fp-movienight.firebaseapp.com",
   projectId: "rea4fp-movienight",
   storageBucket: "rea4fp-movienight.appspot.com",
   messagingSenderId: "380560606451",
   appId: "1:343248842259:web:c5da003e6d43699c1b19e6",
   measurementId: "G-NEGSWCCRN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
