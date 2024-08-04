// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4mQo3Hy8qKAoKlmbpPlIvjavVGQ9oyU",
  authDomain: "pantry-tracker-322b7.firebaseapp.com",
  projectId: "pantry-tracker-322b7",
  storageBucket: "pantry-tracker-322b7.appspot.com",
  messagingSenderId: "456812613267",
  appId: "1:456812613267:web:c86178b30c07d585de8766",
  measurementId: "G-78KM52NC4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}