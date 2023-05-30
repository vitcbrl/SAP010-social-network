// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import sobre from './pages/sobre/index.js';
import inicio from './pages/inicio/index.js';
import { getCities, db } from './firebase.js';

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
