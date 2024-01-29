import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAf_v24NnCAI-uzKPWA5qVrHyOMbbEzpjo",
  authDomain: "zomato-clone-583d6.firebaseapp.com",
  projectId: "zomato-clone-583d6",
  storageBucket: "zomato-clone-583d6.appspot.com",
  messagingSenderId: "389574586133",
  appId: "1:389574586133:web:559b2e8bfbfa8298edc31c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()