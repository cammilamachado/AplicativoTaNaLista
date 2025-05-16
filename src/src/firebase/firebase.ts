import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgDNWcWhxIp3yji4xvXHJq3g7tOOte1RY",
    authDomain: "comprasapp-3b097.firebaseapp.com",
    projectId: "comprasapp-3b097",
    storageBucket: "comprasapp-3b097.firebasestorage.app",
    messagingSenderId: "736458309596",
    appId: "1:736458309596:web:d3b04940a0444c7aadd919",
    measurementId: "G-Z6QDHBBL2Y"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
