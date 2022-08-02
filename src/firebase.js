import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: "QaeKHQucXFfPzz0NOcAiSWAg80ScyTxAZPdycYL",
     	authDomain: "argon-clone.firebaseapp.com",
       	projectId: "argon-clone",
        storageBucket: "argon-clone.appspot.com",
       	messagingSenderId: "964321401239",
        appId: "1:964321401239:web:8b4f72e1b4957fe1ed3743",
        measurementId: "G-64B332S01"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
