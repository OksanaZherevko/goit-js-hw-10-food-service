import './css/styles.css';
import menu from './menu.json';
import refs from './js/refs';
import { changeCheme } from './js/changeCheme';
import menuCarts from './templates/menu-cards.hbs';

const generateMenu = menuCarts(menu);

if (localStorage.getItem('themColor')) {
  refs.documentThem.classList.add(localStorage.getItem('themColor'));
}

if (refs.documentThem.classList.contains('dark-theme')) {
  refs.checkBox.checked = true;
}

refs.checkBox.addEventListener('change', changeCheme);
refs.menuList.insertAdjacentHTML('beforeend', generateMenu);