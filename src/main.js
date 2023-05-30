// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import sobre from './pages/sobre/sobre.js';
import inicio from './pages/inicio/login.js';
import registro from './pages/registro/registro.js';
import { getUsers, db } from './firebase.js';

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
        case '#registro':
        main.appendChild(registro());
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
