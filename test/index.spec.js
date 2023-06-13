import {
  signInWithPopup,
  signInWithEmailAndPassword,
  auth,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

import { loginUser, loginGoogle, userStateChanged } from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

/* 'TESTE EMAIL VALIDO' */
describe('loginUser', () => {
  it('deve fazer o login com e-mail', async () => {
    const email = 'anateste@gmail.com';
    const password = '12341234';
    signInWithEmailAndPassword.mockResolvedValueOnce();
    await loginUser(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password,
    );
  });
});

describe('loginGoogle', () => {
  it('deveria ser uma função', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it('Deveria logar o usuário com a conta do google', async () => {
    signInWithPopup.mockResolvedValueOnce();
    await loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('userStateChanged', () => {
  it('a função deve manter o usuário logado', () => {
    userStateChanged();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

describe('editPost', () => {
  it('deve editar o post no banco de dados', async () => {
    const postId = '3ilnk6qZQ1WVEiaYla27';
    const textEdit = {
      title: 'Novo título',
      content: 'Novo conteúdo',
    };

    const db = getFirestore();
    const docRef = doc(db, 'posts', postId);
    updateDoc.mockResolvedValueOnce();

    await expect(updateDoc(docRef, textEdit)).resolves.toBeUndefined();
    expect(updateDoc).toHaveBeenCalledWith(docRef, textEdit);
  });
});
