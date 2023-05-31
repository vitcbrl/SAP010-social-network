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

    <main>
      
    </main>
  `;
  container.innerHTML = template;

  return container;
};
