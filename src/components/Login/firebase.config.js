import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDPIrDCDko_KaTwLh7gHbLjdA_x47EibzM",
    authDomain: "doctors-portal-by-iqbal.firebaseapp.com",
    projectId: "doctors-portal-by-iqbal",
    storageBucket: "doctors-portal-by-iqbal.appspot.com",
    messagingSenderId: "732703579032",
    appId: "1:732703579032:web:b5d5b0fe8a7948370029ed",
    measurementId: "G-TT2DDGERD7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
