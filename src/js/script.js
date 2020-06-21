
const header = document.getElementById("mainNav");
const btn = document.getElementById("navbar__btn");
const navbar = document.getElementById("navbarResponsive");

(function scroll() {
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('mainNav_active');
        } else {
            header.classList.remove('mainNav_active');
        }
    }
}());

(function () {
    btn.addEventListener('click', () => {
        btn.classList.toggle('collapsed');
        navbar.classList.toggle('show')
    });
})();

(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.navbar-brand').clientHeight + 40;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        navbar.classList.remove('show');
        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };

    scrollTo();
}());

