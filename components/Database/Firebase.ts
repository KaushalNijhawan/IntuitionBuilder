import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

export default app;