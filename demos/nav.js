
document.addEventListener('DOMContentLoaded', () => {
    const filename = document.location.pathname.split('/').pop().split('.')[0];
    fetch('./nav.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const navDocument = parser.parseFromString(html, 'text/html');
            const navLinks = navDocument.querySelectorAll(`a[data-demo="${filename}"]`);
            navLinks.forEach(link => link.classList.add('on'));
    
            document.body.appendChild(navDocument.body);
        })
        .catch(error => console.error('Error fetching nav.html:', error));
    
});
