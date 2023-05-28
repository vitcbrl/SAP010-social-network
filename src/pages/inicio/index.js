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
            </div>
        </div>
        <!-- CAMPO DE ENTRAR -->
        <div class="inicio">
            <div class="container">
                <h1 class="descricao-entrar">ENTRAR</h1>
                <button class="link-google" id="btn-google"><i class="fab fa-google"></i> Entrar com o Google</button>
                <form class="login">
                    <label for="email">E-mail</label>
                    <input type="email" class="email-login" id="email" name="email" placeholder="user@gmail.com" required/>
                    <div class="linha-horizontal"></div>
                    <label for="senha">Senha</label>
                    <input type="password" class="senha-login" id="senha" name="password" placeholder="Senha" required/>
                    <div class="linha-horizontal"></div>
                    <div class="btn-enter">
                        <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
                    </div>
                </form>
            </div>
            <p class="or">ou</p>
            <a href="#register" class="nova-conta">Criar Nova Conta</a>
        </div>
    </section>
    `;

    container.innerHTML = template;

    return container;
}
