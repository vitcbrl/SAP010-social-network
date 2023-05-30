// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import sobre from './pages/sobre/sobre.js';
import inicio from './pages/inicio/login.js';
import { getUsers, db } from './firebase.js';
import posts from './pages/posts.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
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
      default:
        main.appendChild(inicio());
    }
  });
};

window.addEventListener('load', () => {
  getUsers(db).then((data) => console.log(data)); //a fução getusers é uma função assincrona e ela retorna uma promisse
  main.appendChild(inicio());
  init();
});
// myFunction();
