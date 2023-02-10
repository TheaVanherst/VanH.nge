import {writable} from "svelte/store";

// General toggles

const motion = writable(false);

export { motion };

// Scroll pos

const scrollPos = writable(0);
// let localScroll;
// directory.subscribe((val) => { localScroll = val });

export { scrollPos };
