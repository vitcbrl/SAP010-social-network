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

    <div class="overview-title">
        <h1>Seja bem-vinda ao Techsisters! Mostre ao mundo seu potencial!</h1>
        </div>
        <section class="feed-container" id="feed-container">
            <div class="feed-novo-post">
                <textarea class="feed-text-box" id="text-post" placeholder="Escreva aqui seu post..." name="story" rows="5" cols="33"></textarea>
            </div>
            <div id="post-area">
            </div>
        </section>

    
  `;
  container.innerHTML = template;

  return container;
};
