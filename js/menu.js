//asignamos variables constantes a las 
//clases de la etiqueta que estan como selectores
const openButton = document.querySelector(".nav__menu");
const menu = document.querySelector(".nav__link");
const closeMenu = document.querySelector(".nav__close");

//cuando se requiere mostrar el menu desplegable, con el event click
//agrega el selector a la clase del menu.
openButton.addEventListener("click", () => {
   menu.classList.add('nav__link--show');
});

//cuando se va cerrar el menu desplegable, con el event click
//se remueve el mismo selector que mostraba el menu.
closeMenu.addEventListener("click", () => {
   menu.classList.remove("nav__link--show");
});