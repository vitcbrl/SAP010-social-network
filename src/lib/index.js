import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
  increment,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore/lite';
import { auth, app } from '../firebase.js';

// Função para fazer login com o Google
// Função para fazer login com o Google
export const loginGoogle = () => {
  // eslint-disable-next-line no-shadow
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then(() => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // Handle Errors here.
      // The email of the user's account used.
      // The AuthCredential type that was used.
      // ...
      // eslint-disable-next-line no-alert
      alert(errorCode);
    });
};

// Função para fazer login com email e senha
// eslint-disable-next-line max-len
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password); // importa dessa nova maneira que é o novo

// Função para criar login com email e senha
// eslint-disable-next-line max-len
export const loginCreate = (name, email, password) => createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
  const user = userCredential.user;
  updateProfile(user, { displayName: name });
});

// função para manter o usuário logado
export function userStateChanged(callback) {
  // eslint-disable-next-line no-shadow
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

// função para deslogar o usuário
export function userStateLogout() {
  const authLogout = getAuth();
  signOut(authLogout);
}

// função like
export async function likePost(postId) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    like: increment(1),
  });
}

// função editar o post
export async function editPost(postId, textEdit) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    content: textEdit,
  });
}

// função para deletar o post
export async function deletePost(postId) {
  // eslint-disable-next-line no-console
  console.log(postId);
  const db = getFirestore(app);
  await deleteDoc(doc(db, 'posts', postId));
}

// Adicione um post ao banco de dados
// Função addPost: Adiciona um post no banco de dados
export async function addPost(db, post) {
  // db representa o objeto do banco de dados
  // post representa o objeto do post a ser adicionado
  const postsCol = collection(db, 'posts'); // Referência à coleção 'posts' no banco de dados
  await addDoc(postsCol, post); // Adiciona o documento (post) à coleção 'posts'
}

export async function getPosts(db) {
  const postsCol = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCol);
  // eslint-disable-next-line no-shadow
  const postsList = postsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return postsList;
}
