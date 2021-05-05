import refs from './refs';

const themeColor = {
  DARK: 'dark-theme',
  LIGHT: 'light-theme',
};

const changeBodyClass = (addClass, removeClass) => {
  refs.documentThem.classList.remove(removeClass);
  refs.documentThem.classList.add(addClass);
  localStorage.setItem('themColor', addClass);
}

const changeCheme = () => {
  if (refs.documentThem.classList.contains(themeColor.DARK)) {
    changeBodyClass(themeColor.LIGHT, themeColor.DARK)   
  } else {
    changeBodyClass(themeColor.DARK, themeColor.LIGHT)    
  }
};


export { changeCheme };