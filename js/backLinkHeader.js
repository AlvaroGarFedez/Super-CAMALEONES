/* ---------------- CABECERA DE ARTÍCULO ----------------- */
/*_________________________________________________________*/

// Introducimos la cabecera en la página.
fetch('components/backLinkHeader.html').then(response => response.text()).then(data => {
    document.querySelector('#backLinkHeader').innerHTML = data;

    // Extraemos el botón VOLVER del HTML y lo configuramos para que vaya hacia atrás en vez de apuntar a una dirección específica.
    let backLinkItem = document.querySelector('.backLinkHeader__subcontainer__button');
    backLinkItem.addEventListener('click', function() {history.back();} );

});

/*_________________________________________________________*/