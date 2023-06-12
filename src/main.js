/* eslint-disable max-len */
// import { myFunction } from './lib/index.js';

import sobre from './pages/sobre/sobre.js';
import inicio from './pages/inicio/login.js';
// eslint-disable-next-line import/no-duplicates
import registro from './pages/registro/registro.js';
import { db } from './firebase.js';
import { getPosts } from './lib/index.js';
import posts from './pages/posts.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  // window.addEventListener('hashchange', () => quando estavamos recarregado a página, o evento load tava sendo acionado primeiro, mas o evento hashchange depois. Isso tava fazendo q o conteúdo da página estivesse sendo renderizado antes mesmo de ser definido o comportamento para o evento hashchange, o que fazia o login não funcionar.
  switch (window.location.hash) {
    case '':
      main.appendChild(inicio());
      break;
    case '#sobre':
      main.appendChild(sobre());
      break;
    case '#posts':
      main.appendChild(posts());
      break;
    case '#registro':
      main.appendChild(registro());
      break;
    default:
      main.appendChild(inicio());
  }
};

window.addEventListener('load', () => {
  // eslint-disable-next-line no-console
  getPosts(db).then((data) => console.log(data)); // A função getUsers é assíncrona e retorna uma Promise
  // main.appendChild(inicio());
  init();
});

window.addEventListener('hashchange', init); // sempre que houver uma alteração no fragmento da URL, a função init será chamada para atualizar o conteúdo exibido na página de acordo com o novo fragmento. Após o símbolo #, o evento hashchange é acionado.

// myFunction();
