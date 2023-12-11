import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeJXUCqndA_zq7VCGzbMyRdqzyB928Gmo",
    authDomain: "intuitionbuilder.firebaseapp.com",
    projectId: "intuitionbuilder",
    storageBucket: "intuitionbuilder.appspot.com",
    messagingSenderId: "188084383558",
    appId: "1:188084383558:web:f968c42116a496ab5c3f47",
    measurementId: "G-HJBYY88VKK"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);