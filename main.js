window.addEventListener('DOMContentLoaded', function(){
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function(){
        const scrolHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if(scrolHeight > navHeight){
            navbar.classList.add('fixed-nav')
        } else {
            navbar.classList.remove('fixed-nav')
        }
    })


})