import sobre from './pages/sobre/sobre.js';
import inicio from './pages/inicio/login.js';
import registro from './pages/registro/registro.js';
import posts from './pages/posts/posts.js';

import { db } from './lib/firebase.js';
import { getPosts } from './lib/index.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
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
  getPosts(db).then((data) => console.log(data));
  init();
});

window.addEventListener('hashchange', init);
