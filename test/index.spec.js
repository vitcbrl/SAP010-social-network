import { loginUser } from '../src/lib/index';

describe('loginUser', () => {
  it('deve fazer o login com e-mail', async () => {
    const email = 'anateste@gmail.com';
    const password = '12341234';

    const userCredential = await loginUser(email, password);

    expect(userCredential.user.email).toBe(email);
  });
});
