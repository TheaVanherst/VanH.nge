
import { writable } from 'svelte/store';

// navigation fetch vars

const loading = writable(false);
const navigating = writable(false);
const directory = writable("/");

export { loading, navigating, directory };

// navigation controller

import { goto } from '$app/navigation';

let directoryString;
directory.subscribe((val) => { directoryString = val });

const fetchData = (url) => {
    loading.set(true);

    return fetch(url)
        .then(async (e) => {
            directory.set(url)
            goto(e.url);
        });
};

const urlChanger = async (url) => {
    event.preventDefault();

    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });
    // localScroll = 0;

    if(directoryString !== url) {
        await fetchData(url);
    }
};

export { urlChanger };

// other page vars

const scrollPos = writable(0);
let localScroll;
directory.subscribe((val) => { localScroll = val });

export { scrollPos };