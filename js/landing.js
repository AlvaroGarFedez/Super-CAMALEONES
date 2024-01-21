/* ------------- ANIMACIÓN: CAMBIOS DE COLOR ------------- */
/*_________________________________________________________*/
// Animación que cambia el color del título de la web y de la imagen de la portada. Mientras ambos arrays tengan el mismo número de colores se puede añadir todos los que se quiera sin tener que cambiar nada en la función.

// Guardamos los textos en un array y la imagen del camaleón en otra variable para poder manipularlos.
let titleItems = document.querySelectorAll('.chameleonicColor');
let chameleonItem = document.querySelector('.chameleonicFilter');
// Definimos sendos arrays con los colores y filtros que iremos aplicando durante la animación.
let colorsArray = ['var(--color-mainGreen)', 'var(--color-mainYellow)', 'var(--color-mainOrange)', 'var(--color-mainRed)', 'var(--color-mainPurple)', 'var(--color-mainTurquoise)'];
let filtersArray = ['var(--svgFilter-mainGreen)', 'var(--svgFilter-mainYellow)', 'var(--svgFilter-mainOrange)', 'var(--svgFilter-mainRed)', 'var(--svgFilter-mainPurple)', 'var(--svgFilter-mainTurquoise)'];

// Definimos la función que cambiará el color del título y la imagen. No sin antes inicializar la variable que guarda el tiempo de la animación para reiniciarla nada más acabar.
let totalDuration;
function changeColor() {
    
    //Inicializamos el índice que va a controlar que todos los colores duren el mismo tiempo. Empieza en 4 para dar un tiempo de espera a la animación.
    let timeIndex = 3;
    const partialDuration = 2000;

    // Para cada color... 
    colorsArray.forEach( (currentColor, colorIndex) => {
        setTimeout( () => {
            // ... Se lo aplicamos al título...
            titleItems.forEach( (currentTitle) => {
                currentTitle.style.color = `${currentColor}`;
            });
            // ... Le aplicamos el filtro correspondiente a la imagen...
            chameleonItem.style.filter = `${filtersArray[colorIndex]}`;
        }, timeIndex*partialDuration);
        //... Y subimos el contador de tiempo.
        timeIndex ++;
    });

    // Ahora "camuflamos" los elementos con el fondo cambiando la opacidad de la imagen y el color de los textos.
    setTimeout( () => {
        titleItems.forEach( (currentTitle) => {
            currentTitle.style.color = `transparent`;
        });
        chameleonItem.style.opacity = `0`;
    }, timeIndex*partialDuration);
    timeIndex ++;

    // Y, finalmente, los devolvemos a su estado inicial.
    setTimeout( () => {
        titleItems.forEach( (currentTitle) => {
            currentTitle.style.color = `var(--color-darkGreen)`;
        });
        chameleonItem.style.opacity = `1`;
        chameleonItem.style.filter = `var(--svgFilter-darkGreen)`;
    }, timeIndex*partialDuration);
    
    // Actualizamos una última vez el índice de tiempo para calcular la duración total de la animación.
    timeIndex ++;
    totalDuration = timeIndex*partialDuration;
}

// Por último, definimos el bucle temporal que cambia el color de los elementos cada cierto tiempo. Pero primero la llamamos para que la primera vez no haga falta esperar.
changeColor();
setInterval( () => {
    changeColor();
}, totalDuration);

/*_________________________________________________________*/