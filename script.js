const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const toggleMenu = () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
};

menuToggle.addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});
