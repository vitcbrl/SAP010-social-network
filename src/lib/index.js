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
import { auth, app } from './firebase.js';

export const loginGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then(() => {
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
};

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const loginCreate = (name, email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name });
    });

export function userStateChanged(callback) {
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

export function userStateLogout() {
  const authLogout = getAuth();
  signOut(authLogout);
}

export async function likePost(postId, liked) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    like: increment(liked ? 1 : -1),
  });
}

export async function editPost(postId, textEdit) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    content: textEdit,
  });
}

export async function deletePost(postId) {
  console.log(postId);
  const db = getFirestore(app);
  await deleteDoc(doc(db, 'posts', postId));
}

// Adicione um post ao banco de dados
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
