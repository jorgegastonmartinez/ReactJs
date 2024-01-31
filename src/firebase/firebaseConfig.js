import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCimW4rBRp_WWhIFhWQReF8hC-jzst-E8",
  authDomain: "e-commerse-d742e.firebaseapp.com",
  projectId: "e-commerse-d742e",
  storageBucket: "e-commerse-d742e.appspot.com",
  messagingSenderId: "146002190331",
  appId: "1:146002190331:web:f0cba6d8fa18918b3cf55e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
