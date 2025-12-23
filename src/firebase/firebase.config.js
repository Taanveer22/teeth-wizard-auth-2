// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYayA7BAggfvYpjd6qcTuNSMYLYPKbiEw",
  authDomain: "teeth-wizard-2.firebaseapp.com",
  projectId: "teeth-wizard-2",
  storageBucket: "teeth-wizard-2.firebasestorage.app",
  messagingSenderId: "368759201124",
  appId: "1:368759201124:web:b029a78c2f3bf6e80cee71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export
export default auth;
