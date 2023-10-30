// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-LEXGU3gArXDCsi_JWJi9ra-mV-__0M",
  authDomain: "my-react-native-app-4d77e.firebaseapp.com",
  projectId: "my-react-native-app-4d77e",
  storageBucket: "my-react-native-app-4d77e.appspot.com",
  messagingSenderId: "1090309357361",
  appId: "1:1090309357361:web:673991f6b9a62c0845ba10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}