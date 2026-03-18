const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

const toggleNav = () => {
    navList.classList.toggle('active');
};

navToggle.addEventListener('click', toggleNav);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile nav if open
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
