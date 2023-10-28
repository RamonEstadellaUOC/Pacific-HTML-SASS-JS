

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', function(event){
    event.preventDefault();
    // Deshabilita el botón para evitar múltiples clics
    hamburger.disabled = true;

    // primero poner myTopnav flex direction colun y el height a 300
    const myTopnav = document.getElementById("myTopnav");

    // nav__link displayo block
    const nav__links = Array.from(document.getElementsByClassName("nav__link"));

    // --- EN QUE ESTADO ESTA PARA PONERLO COMO QUIERO
    if(myTopnav.style.flexDirection === 'column'){
        myTopnav.style.flexDirection = 'row';
        myTopnav.style.height = '80px';
        nav__links.forEach(nav__link => {
            nav__link.style.display = "none";
        });

    } else {
        myTopnav.style.flexDirection = 'column';
        myTopnav.style.height = '300px';

        nav__links.forEach(nav__link => {
            nav__link.style.display = "block";
        });
    }

});

