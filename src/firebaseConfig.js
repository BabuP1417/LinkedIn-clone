import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcyMgi3eLgDO8ekG3DRWS31emh0EBssQ0",
  authDomain: "linkedin-clone-883e9.firebaseapp.com",
  projectId: "linkedin-clone-883e9",
  storageBucket: "linkedin-clone-883e9.appspot.com",
  messagingSenderId: "843413693363",
  appId: "1:843413693363:web:ed241fccd64519a9d761c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
