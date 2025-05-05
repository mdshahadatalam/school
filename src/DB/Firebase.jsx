// firebase.js or firebaseConfig.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOEAcnfOvYO8mkmkvq8PPnqc-8VFMgZQI",
  authDomain: "school-faf88.firebaseapp.com",
  projectId: "school-faf88",
  storageBucket: "school-faf88.firebasestorage.app",
  messagingSenderId: "REACT_APP_USERID",
  appId: "REACT_APP_APPLIED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the app
export default firebaseConfig;
