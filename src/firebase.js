import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBN_iUoWqg55Xt_Sir-f9cCIR0tW1pSMuw",
    authDomain: "spotipasfy.firebaseapp.com",
    projectId: "spotipasfy",
    storageBucket: "spotipasfy.firebasestorage.app",
    messagingSenderId: "1059961554912",
    appId: "1:1059961554912:web:5d7901f1dbbd70fc168d85",
    measurementId: "G-YRC2ZYDJJ3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);