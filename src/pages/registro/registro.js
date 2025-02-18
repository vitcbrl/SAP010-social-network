import { loginCreate } from '../../lib/index';

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
        <h1 class="cadastro">Cadastre-se</h1>
        <form class="user-register">
          <label class='label' for="email">E-mail</label>
          <input type="email" class="email-login" id="email" name="email" placeholder="user@gmail.com"/>
          <label class='label' for="username">Nome ou Apelido</label>
          <input type="text" class="username" id="username" placeholder="Techsisters">
          <label class='label' for="senha">Senha</label>
          <input type="password" class="senha-login" id="senha" placeholder="*****"/>
          <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
        </form>
        <div class='voltar'>
          <a id="voltar" href="#login">VOLTAR PARA O INICIO</a>
        </div>
    </div>
</div>
</div>
</section>  
  `;
  container.innerHTML = template;

  const btnLoginCreate = container.querySelector('#btn-entrar');
  const email = container.querySelector('#email');
  const name = container.querySelector('#username');
  const password = container.querySelector('#senha');

  btnLoginCreate.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
      loginCreate(name.value, email.value, password.value)
        .then(() => {
          alert('Seu cadastro foi finalizado. Clique em OK para postar!');
          location.hash = '#posts';
        })
        .catch(() => {
          alert('Por favor, insira seus dados.');
        });
    } else {
      alert('Por favor, insira um email válido.');
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  return container;
};
