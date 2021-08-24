import menuData from '../menu.json';
import menuCardTemplate from '../templates/menu.hbs';

const menu = document.querySelector('.js-menu');

const menuCardMarkup = menuCardTemplate(menuData);
menu.insertAdjacentHTML('beforeend', menuCardMarkup);