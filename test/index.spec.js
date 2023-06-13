import {
  signInWithPopup,
  signInWithEmailAndPassword,
  auth,
} from 'firebase/auth';
import { loginUser, loginGoogle } from '../src/lib/index';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

/* "TESTE EMAIL VALIDO" */
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
