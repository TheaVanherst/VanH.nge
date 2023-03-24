
import { writable } from "svelte/store";

// General toggles

const motion = writable(false);
export { motion };

// Scroll pos

const scrollPos = writable(0);

const scrollIntoView = ({ target }) => {
    let element = document.querySelector(target.getAttribute('href'));

    if (!element) element = document.body;

    element.scrollIntoView({
        behavior: 'smooth'
    });
}

export { scrollIntoView, scrollPos };
