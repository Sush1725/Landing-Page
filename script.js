const mobileButton = document.querySelector('.menu');
mobileButton.addEventListener('click', function(){
    const nav= document.querySelector('.nav');
    const headerH1= document.querySelector('.header-h1');
    const downArrow= document.querySelector('.down-arrow');
    nav.classList.toggle('show');
    headerH1.classList.toggle('hide');
    downArrow.classList.toggle('hide');
})