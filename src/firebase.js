// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//configuração do firebase to ligando ele ao meu vscode

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




// Get a list of cities from your database
export async function getUsers(db) {
  const usersCol = collection(db, 'users'); //pegar a minha coleçao de usuarios que é passado pelo meu db
  const usersSnapshot = await getDocs(usersCol); //vai pegar todos os dados que estao dentro da coleção users
  const usersList = usersSnapshot.docs.map((doc) => doc.data()); //mapeia esses dados e coloca dentro de um array, é um array de usuarios que é o retorno da function
  return usersList;
}


// Adicione um post ao banco de dados
export  async function addPost(db, post) {
  const postsCol = collection(db, 'posts');
  await addDoc(postsCol, post);
}

export default getUsers;