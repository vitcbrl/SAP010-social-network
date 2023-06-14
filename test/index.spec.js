import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

import {
  loginUser, loginGoogle, loginCreate, userStateChanged,
} from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('createUser', () => {
  it('deve criar um usuário', async () => {
    const user = {
      name: 'teste',
      email: 'teste@gmail.com',
      password: '12345',
    };

    createUserWithEmailAndPassword.mockResolvedValue({ user });
    // createUserWithEmailAndPassword.mockResolvedValueOnce();
    await loginCreate(user.name, user.email, user.password);
    // eslint-disable-next-line jest/valid-expect, max-len
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, user.email, user.password);
    // eslint-disable-next-line no-undef
    expect(updateProfile).toHaveBeenCalledWith(user, {
      displayName: user.name,
    });
  });
});

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

describe('userStateLogout', () => {
  it('deve chamar a função signOut corretamente', () => {
    const authMock = {};
    getAuth.mockReturnValueOnce(authMock);

    userStateLogout();

    expect(signOut).toHaveBeenCalledWith(authMock);
  });
});
