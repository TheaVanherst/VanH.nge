
import { writable } from "svelte/store";

// General toggles

const motion = writable(false);
export { motion };

// Scroll pos

const scrollPos = writable(0);
export { scrollPos };

const scrollOffset = writable(0);
export { scrollOffset };
