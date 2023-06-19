import { loginGoogle, loginUser } from '../../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
  <section class="content">
    <div class="create">
      <div class="title">
        <h1 class="title-logo">Techsisters</h1>
        <div class='linha'></div>
          <div class="logo">
            <img src="./img/img-inicio.png" alt="Logo">     
          </div>
      </div>
    </div>
    <!-- CAMPO DE ENTRAR -->
    <div class="inicio">
      <div class="container">
        <h1 class="descricao-entrar">ENTRAR</h1>
        <button class="link-google" id="btn-google"><ion-icon name="logo-google"></ion-icon><p class='entrar-google'>Entrar com o Google<p></button>
        <form class="login">
          <label class='label' for="email">E-mail</label>
          <input type="email" class="email-login" id="email" name="email" placeholder="user@gmail.com" required/>
          <div class="linha-horizontal"></div>
          <label class='label' for="senha">Senha</label>
          <input type="password" class="senha-login" id="senha" name="password" placeholder="Senha" required/>
          <div class="btn-enter">
            <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
          </div>
        </form>
      </div>
        <p class="or">ou</p>
        <a href="#registro" class="nova-conta">Criar Nova Conta</a>
    </div>
  </section>
  `;
  container.innerHTML = template;

  const btnLogin = container.querySelector('#btn-entrar');
  const email = container.querySelector('#email');
  const password = container.querySelector('#senha');
  const btnGoogle = container.querySelector('#btn-google');

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('google ok');
    loginGoogle()
      .then(() => {
        location.hash = '#posts';
      });
  });

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
      loginUser(email.value, password.value)
        .then(() => {
          location.hash = '#posts';
        })
        .catch(() => {
          alert('Email ou senha inválidos');
        });
    } else {
      alert('Por favor, insira um email válido');
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return container;
};
