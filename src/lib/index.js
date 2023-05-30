import firebase from 'firebase/app';
import 'firebase/auth';

// Função para fazer login com o Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // eslint-disable-next-line no-restricted-globals
      location.hash = '#feed';
    })
    .catch((error) => {
      console.error(error);
      alert('Falha no login com o Google');
    });
};

// Função para fazer login com email e senha
export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
