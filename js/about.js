/* ------------- EFECTO: KODAMA QUE GERMINA -------------- */
/*_________________________________________________________*/
// Efecto para el kodama que germina al llegar al fondo de la página.

// Guardamos las imágenes en variables para poder manipularlas.
let kodamaFirstItem = document.querySelector('.about__subcontainer__content__imageContainer__image--first');
let kodamaSecondItem = document.querySelector('.about__subcontainer__content__imageContainer__image--second');
// Guardamos también el elemento que utilizaremos como referencia para cambiar la imagen.
let indicatorItem = document.querySelector('.about__subcontainer__decoration--bottom');

// Preparamos la ventana del navegador para que llame a la función "changeItem" al hacer scroll. En serio, se ejecuta cada vez que movemos un milímetro el scroll.
window.addEventListener('scroll', changeItem);

// Y ahora definimos la función, claro.
function changeItem() {
 
    // Averiguamos la altura de la pantalla.
    let actualHeight = window.innerHeight;

    // Averiguamos dónde está la parte superior del chivato.
    let indicatorTop = indicatorItem.getBoundingClientRect().top;

    // Y, ahora, si el indicador está en pantalla...
    if (indicatorTop <= actualHeight) {
        // ... Cambiamos una imagen por otra.
        kodamaFirstItem.style.opacity = '0';
        kodamaSecondItem.style.opacity = '1';
    };

};

/*_________________________________________________________*/