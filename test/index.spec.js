import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  onAuthStateChanged,
  getAuth,
  signOut,
} from 'firebase/auth';

import {
  deleteDoc,
  getFirestore,
  doc,
  updateDoc,
  addDoc,
  getDocs,
  collection,
  userId,
  getDoc,
} from 'firebase/firestore/lite';

import {
  loginUser,
  loginGoogle,
  loginCreate,
  userStateChanged,
  userStateLogout,
  deletePost,
  editPost,
  addPost,
  likePost,
  getPosts,
} from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore/lite');

describe('createUser', () => {
  it('deve criar um usuário', async () => {
    const user = {
      name: 'teste',
      email: 'teste@gmail.com',
      password: '12345',
    };

    createUserWithEmailAndPassword.mockResolvedValueOnce(user);

    await loginCreate(user.name, user.email, user.password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, user.email, user.password);
  });
});

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
    const postId = 'postId';
    const textEdit = {
      content: 'texto novo',
    };
    updateDoc.mockResolvedValueOnce();

    await editPost(postId, textEdit);

    expect(updateDoc).toHaveBeenCalledTimes(1);
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

describe('deletePost', () => {
  it('deve deletar o post no banco de dados', async () => {
    const postId = 'postId';
    deleteDoc.mockResolvedValueOnce();

    await deletePost(postId);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });
});

describe('addPost', () => {
  it('deve adicionar o post no banco de dados', async () => {
    const db = {};
    const post = {};
    addDoc.mockResolvedValueOnce();

    await addPost(db, post);

    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});

describe('likePost', () => {
  it('deve incrementar o contador de likes no banco de dados', async () => {
    const postId = 'IqTvgPPiC0PQTTlPeSdg'; // Substitua 'postId' pelo ID válido do documento "post"
    const db = getFirestore();
    const docRef = doc(db, 'posts', postId);
    const updateDocMock = jest.fn();
    const auth = {
      currentUser: {
        // Defina as propriedades do usuário logado necessárias para o teste
      },
    };

    // Simula a obtenção de dados do documento "post" com o ID fornecido
    const postSnap = { data: () => ({ like: [] }) };

    // Substitua a função getDoc pela simulação de obtenção de dados do documento
    const getDocMock = jest.fn().mockResolvedValue(postSnap);
    getDoc.mockImplementation(getDocMock);

    updateDoc.mockImplementation(updateDocMock);

    await likePost(db, postId, userId, auth);

    expect(updateDocMock).toHaveBeenCalled();
    expect(updateDocMock).toHaveBeenNthCalledWith(1, docRef, { like: [undefined] });
  });
});

describe('getPosts', () => {
  let db;

  beforeAll(() => {
    db = getFirestore();
  });

  it('retorna uma lista de posts', async () => {
    const postsColMock = collection(db, 'posts');
    const postsSnapshotMock = {
      docs: [
        { id: '1', data: () => ({ title: 'Post 1' }) },
      ],
    };
    getDocs.mockResolvedValueOnce(postsSnapshotMock);

    const result = await getPosts(db);

    expect(result).toHaveLength(1);
    expect(collection).toHaveBeenCalledWith(db, 'posts');
    expect(getDocs).toHaveBeenCalledWith(postsColMock);
  });
});
