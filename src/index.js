import './sass/main.scss';
import dish from "./menu.json"
import dishesTemplate from './templates/dishes.hbs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const dishesData = {
    dish: dish,
}

const dishesHTML = dishesTemplate(dishesData)
document.querySelector('.js-menu').innerHTML = dishesHTML 

const currentTheme = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
currentTheme.classList.add(Theme.LIGHT);


const lightThemeFunc = () => {
    currentTheme.classList.add(Theme.LIGHT);
    currentTheme.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
};

const darkThemeFunc = () => {
    currentTheme.classList.add(Theme.DARK);
    currentTheme.classList.remove(Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.DARK);
};

const changeThemeFunc = () => {
    if (!themeSwitcher.checked) {
        lightThemeFunc();
    } else {
        darkThemeFunc();
    }
};

themeSwitcher.addEventListener('change', changeThemeFunc);

if (localStorage.getItem('theme') === Theme.DARK) {
  themeSwitcher.checked = 'true';
  darkThemeFunc();
}


