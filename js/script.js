(function () {
    const header = document.getElementById("mainNav");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('mainNav_active');
        } else {
            header.classList.remove('mainNav_active');
        }
    }
}());