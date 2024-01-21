/* ------------- ANIMACIÓN: CAMBIOS DE COLOR ------------- */
/*_________________________________________________________*/
// Animación que cambia el color del título de la web. Se puede añadir todos los colores que se quiera sin tener que cambiar nada en la función.

// Guardamos los textos en un array para poder manipularlos.
let titleItems = document.querySelectorAll('.chameleonicColor');
// Definimos el array con los colores que iremos aplicando durante la animación.
let colorsArray = ['var(--color-mainGreen)', 'var(--color-mainYellow)', 'var(--color-mainOrange)', 'var(--color-mainRed)', 'var(--color-mainPurple)', 'var(--color-mainTurquoise)'];

// Definimos la función que cambiará el color del título. No sin antes inicializar la variable que guarda el tiempo de la animación para reiniciarla nada más acabar.
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
        }, timeIndex*partialDuration);
        //... Y subimos el contador de tiempo.
        timeIndex ++;
    });

    // Ahora "camuflamos" los elementos con el fondo cambiando el color de los textos.
    setTimeout( () => {
        titleItems.forEach( (currentTitle) => {
            currentTitle.style.color = `transparent`;
        });
    }, timeIndex*partialDuration);
    timeIndex ++;

    // Y, finalmente, los devolvemos a su estado inicial.
    setTimeout( () => {
        titleItems.forEach( (currentTitle) => {
            currentTitle.style.color = `var(--color-darkGreen)`;
        });
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


/* ------ EFECTO HOVER: LISTA Y PINES RELACIONADOS ------- */
/*_________________________________________________________*/
// Efecto hover que activa a los elementos de la lista de superpoderes y los pines sobre el camaleón por parejas.

// Guardamos los elementos de la lista y los pines interrelacionados en un array para poder manipularlos.
let listPinPairsItems = ( function() {
    let array = [];
    
    // Cada fila del array será una pareja compuesta por un elemento de la lista y el pin correspondiente (al estar ordenados en el documento HTML esto no sería necesario, pero nunca está de más asegurar). En total guardamos cinco parejas.
    for (let index=1; index <= 5; index++) {

        // Inicializamos el elemento del array como un array a su vez...
        array[index-1] = [];
        // ... Guardamos el elemento de la lista como el primer elemento de la pareja...
        array[index-1][0] = document.querySelector(`.home__subcontainer__gridElement__list__element--${index}`);
        // ... Y guardamos el pin como el segundo elemento de la pareja.
        array[index-1][1] = document.querySelector(`.home__subcontainer__gridElement__map__pin--${index}`);
    
    };

    return array;
} )();

// Añadimos los eventListener, activando y desactivando los elementos de forma interrelacionada:
// En cada pareja...
listPinPairsItems.forEach( (currentPair) => {
    
    // ... Cada elemento...
    currentPair.forEach( (currentItem) => {

        // ... Al colocar el cursor sobre él...
        currentItem.addEventListener('mouseover', function() {
            
            // ... Debe activarse a sí mismo y a su pareja...
            currentPair.forEach( (item) => {
                item.classList.add('active');
            } );

        });

        // ... Y al quitar el cursor de encima...
        currentItem.addEventListener('mouseout', function() {
            
            // ... Debe desactivarse y desactivar a su pareja.
            currentPair.forEach( (item) => {
                item.classList.remove('active');
            } );

        });

    } );

} );

/*_________________________________________________________*/