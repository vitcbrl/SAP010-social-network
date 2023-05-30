export default () => {
  const container = document.createElement('div');

  const template = `
    <header class="geral">
    <h1 class="Techsisters">Techsisters</h1>
      <nav class="links">
        <a class="inicioA" href="../pages/login.js">INÍCIO</a>
        <a class="sobreA" href="../pages/sobre.js">SOBRE</a>
      </nav>  
    </header>

    <main>
      
    </main>
  `;
  container.innerHTML = template;

  return container;
};
