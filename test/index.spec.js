import { loginUser } from '../src/lib/index';

describe('loginUser', () => {
  it('deve fazer o login com e-mail', async () => {
    const email = 'test@gmail.com';

    const userCredential = await loginUser(email);

    expect(userCredential.user.email).toBe(email);
  });
});
