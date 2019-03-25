window.addEventListener('DOMContentLoaded', function () {

    let overlay = document.getElementById('overlay');
    let body = document.getElementsByTagName('body')[0];
    let scrollFromTop = '0px';
    document.getElementById('openMenuBtn').addEventListener('click', () => {
        overlay.classList.add('overlay_show');
        // body.style = `top: ${-document.documentElement.scrollTop}px`;
        body.classList.add('noscroll');
        
    });

    document.getElementById('closeMenuBtn').addEventListener('click', () => {
        overlay.classList.remove('overlay_show');
        body.classList.remove('noscroll');
    });

});