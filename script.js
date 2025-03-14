document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});