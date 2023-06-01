import { addPost , db } from "../firebase";

export default () => {
  const container = document.createElement('div');

  const template = `
    <header class="geral">
      <h1 class="Techsisters">Techsisters</h1>
      <nav class="links">
        <a class="inicioA" href="#login">INÍCIO</a>
        <a class="sobreA" href="#sobre">SOBRE</a>
      </nav>  
    </header>

    <section class="feed-container" id="feed-container">
      <div class="feed-novo-post">
        <textarea class="feed-text-box" id="text-post" placeholder="Escreva aqui seu post..." name="story" rows="5" cols="33"></textarea>
        <button id="post-button">Publicar</button>
      </div>
      <div id="post-area">
        <!-- Aqui serão exibidos os posts -->
      </div>
    </section>
  `;

  container.innerHTML = template;

  const btnEnvio = container.querySelector('#post-button');

  btnEnvio.addEventListener('click', async (e) => {
    const textPost = document.getElementById('text-post').value;

    if (textPost.trim() !== '') {
      const posts = {
        título: 'Meu primeiro post',
        conteúdo: textPost,
      };

      try {
        await addPost(db, posts);
        alert('Post adicionado com sucesso');
        document.getElementById('text-post').value = '';
      } catch (error) {
        alert('Erro ao adicionar o post: ' + error);
      }
    }
  });

  return container;
};
