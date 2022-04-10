// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkt_VAN3bBiwZOF34AlTdkqo9nyT9uxAU",
  authDomain: "worldcon-7243b.firebaseapp.com",
  projectId: "worldcon-7243b",
  storageBucket: "worldcon-7243b.appspot.com",
  messagingSenderId: "877188034094",
  appId: "1:877188034094:web:6c067fed0eb5c6564939bf",
  measurementId: "G-XPQLFZ4966",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, storage };
