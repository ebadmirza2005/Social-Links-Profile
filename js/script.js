const socialLinks = document.querySelectorAll('.social-links');
const githubLink = document.querySelector('.github');
const frontendMentorLink = document.querySelector('.frontend-mentor');
const instagramLink = document.querySelector('.instagram');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.add('active');
        socialLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    })
})

githubLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://github.com/ebadmirza2005', '_blank');
})

frontendMentorLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.frontendmentor.io/profile/ebadmirza2005', '_blank');
})

instagramLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/ebadmirza_2005/', '_blank');
})

