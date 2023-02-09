
// navigation fetch vars

import { writable } from 'svelte/store';
const loading = writable(false);
const navigating = writable(false);
const directory = writable("/");
const scrollPos = writable(0);

export {loading, navigating, directory, scrollPos};

// navigation controller

import { goto } from '$app/navigation';

let localValue;
directory.subscribe((val) => { localValue = val });

const fetchData = (url) => {
    loading.set(true);
    return fetch(url)
        .then(async (e) => {
            directory.set(url)
            goto(e.url);
        });
}

const urlChanger = async (url) => {
    event.preventDefault();

    if(localValue !== url) {
        await fetchData(url);
    }
}

export { urlChanger };