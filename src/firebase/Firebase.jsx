
import { initializeApp } from "firebase/app";
// import {getFirestore, collection} from "firebase/firestore";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjwVE1BXfT1RSgfiXdgfj5Zh4Brmu6lDU",
  authDomain: "filmflix-1341e.firebaseapp.com",
  projectId: "filmflix-1341e",
  storageBucket: "filmflix-1341e.appspot.com",
  messagingSenderId: "365648052457",
  appId: "1:365648052457:web:ccee5ef58b17a3a22af078"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export const usersRef = collection(db,"users");
export default app;