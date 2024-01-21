/* ----------------------- FOOTER ------------------------ */
/*_________________________________________________________*/

// Introducimos el footer en todas las páginas de la web.
fetch('components/footer.html').then(response => response.text()).then(data => {
    document.querySelector('#footer').innerHTML = data;
});

/*_________________________________________________________*/