/* ------------- EFECTO: COSAS QUE APARECEN -------------- */
/*_________________________________________________________*/
// Efecto para los elementos que aparecen al hacer scroll en los artículos.

// Guardamos los elementos que deben aparecer en un array para poder manipularlos.
let appearingItems = document.querySelectorAll('.appearing');

// Preparamos la ventana del navegador para que llame a la función "showItem" al hacer scroll. En serio, se ejecuta cada vez que movemos un milímetro el scroll.
window.addEventListener('scroll', showItem);

// Y ahora definimos la función, claro.
function showItem() {
 
    // Averiguamos la altura de la pantalla.
    let actualHeight = window.innerHeight;
    
    // Y, ahora, por cada elemento...
    appearingItems.forEach( (currentItem) => {
        // ... Vemos dónde está la parte superior del elemento...
        let itemTop = currentItem.getBoundingClientRect().top;
        // ... Y si la parte superior del elemento ya está en pantalla...
        if (itemTop <= actualHeight) {
            // ... Lo hacemos aparecer. Lo que le pasa a cada tipo de objeto cuando aparece está en el CSS.
            currentItem.classList.add('visible');
        }
    });

};

// Por último, llamamos a la función para que, nada más cargarse la página, los objetos que ya estén en pantalla aparezcan sin esperar a que hagamos scroll.
showItem();

/*_________________________________________________________*/