document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    let currentIndex = 0;

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks[currentIndex].classList.remove('active');
            sections[currentIndex].classList.remove('active');

            currentIndex = index;

            link.classList.add('active');
            sections[currentIndex].classList.add('active');
            sections.forEach((section, i) => {
                section.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        });
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Zoom functionality for images
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.getElementsByClassName("close")[0];

    const images = document.querySelectorAll('.zoomable');
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Scroll functionality for navigation menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
            const targetSection = document.getElementById(targetId);
            const yOffset = -60; // Ajuste para compensar o cabeçalho fixo

            window.scrollTo({
                top: targetSection.offsetTop + yOffset,
                behavior: 'smooth'
            });
        });
    });
});
