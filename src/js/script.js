(function scroll() {
    const header = document.getElementById("mainNav");
   // const value = window.innerWidth;

        window.onscroll = () => {
            if (window.pageYOffset > 50) {
                header.classList.add('mainNav_active');
            } else {
                header.classList.remove('mainNav_active');
            }
        }


}());


const btn = document.getElementById("navbar__btn");
const navbar = document.getElementById("navbarResponsive");
btn.addEventListener('click', () => {
    btn.classList.toggle('collapsed')
    navbar.classList.toggle('show')
});