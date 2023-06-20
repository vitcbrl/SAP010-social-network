import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA8mmvKCsYEEcgP4TTJJnju5RopeT-PU2s',
  authDomain: 'techsisters-a19d0.firebaseapp.com',
  projectId: 'techsisters-a19d0',
  storageBucket: 'techsisters-a19d0.appspot.com',
  messagingSenderId: '713678266801',
  appId: '1:713678266801:web:b9b1ee63bb5bf9d14b5d90',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
