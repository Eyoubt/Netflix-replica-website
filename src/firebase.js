import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUlzsb__eRem8HoRzzg3ZtxhPzufK_sZg",
  authDomain: "netflix-clone-538ec.firebaseapp.com",
  projectId: "netflix-clone-538ec",
  storageBucket: "netflix-clone-538ec.appspot.com",
  messagingSenderId: "910146914006",
  appId: "1:910146914006:web:073e8b287981cadf4eeb77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
