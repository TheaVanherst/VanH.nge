
const scrollIntoView = ({ target }) => {
    const element = document.querySelector(target.getAttribute('href'));

    if (!!element){
        if (!element) return;
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        document.body.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

export default scrollIntoView