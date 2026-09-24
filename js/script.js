const socialLinks = document.querySelectorAll('.social-links');


socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        socialLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const url = link.dataset.url;
        if (url) window.open(url, '_blank');
    })
})

