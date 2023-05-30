/* import { loginGoogle, loginUser } from '../../lib/index.js'; */
export default () => {
  const container = document.createElement('div');

  const template = `
  <section class="content">
    <div class="create">
      <div class="title">
        <h1 class="title-logo">Techsisters</h1>
          <div class="logo">
            <img src="./img/img-inicio.png" alt="Logo">     
          </div>
          <h2>Crie sua conta</h2>
      </div>
    </div>
    <!-- CAMPO DE ENTRAR -->
    <div class="inicio">
      <div class="container">
        <h1 class="descricao-entrar">Cadastre-se</h1>
        <form class="user-register">
          <label for="email">E-mail</label>
          <input type="email" class="email-login" id="email" name="email" placeholder="user@gmail.com"/>
          <hr>
          <label for="username">Nome ou Apelido</label>
          <input type="text" class="username" id="username" placeholder="Techsisters">
          <hr>
          <label for="senha">Senha</label>
          <input type="password" class="senha-login" id="senha" placeholder="*****"/>
          <hr>
            <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
        </form>
    </div>
</div>
<a href="#login" class="retornar"><i class="fa-solid fa-arrow-left"></i></a>
</div>
</section>  
  `;
  container.innerHTML = template;
  return container;
};
