
const scrollIntoView = ({ target }) => {
    const element = document.querySelector(target.getAttribute('href'));
    if (!element) return;
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

export default scrollIntoView