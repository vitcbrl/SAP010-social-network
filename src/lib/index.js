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
  getDoc,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore/lite';
import { auth, app } from './firebase.js';

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  // GoogleAuthProviderclasse,
  // que faz parte da biblioteca Firebase Authentication.
  return signInWithPopup(auth, provider);
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

export const likePost = async (db, postId, userId) => {
  const postRef = doc(db, 'posts', postId);
  const postSnap = await getDoc(postRef);
  const postData = postSnap.data();

  const isLiked = postData.like.includes(userId);

  const updatedLikeArray = isLiked
    ? postData.like.filter((id) => id !== userId)
    : [...postData.like, userId];

  await updateDoc(postRef, { like: updatedLikeArray });
};

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

export async function addPost(db, post) {
  const postsCol = collection(db, 'posts');
  await addDoc(postsCol, post);
}

export async function getPosts(db) {
  const postsCol = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return postsList;
}
