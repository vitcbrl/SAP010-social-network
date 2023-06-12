// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configuração do firebase to ligando ele ao meu vscode

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8mmvKCsYEEcgP4TTJJnju5RopeT-PU2s',
  authDomain: 'techsisters-a19d0.firebaseapp.com',
  projectId: 'techsisters-a19d0',
  storageBucket: 'techsisters-a19d0.appspot.com',
  messagingSenderId: '713678266801',
  appId: '1:713678266801:web:b9b1ee63bb5bf9d14b5d90',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
