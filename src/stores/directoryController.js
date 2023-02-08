
import { goto } from '$app/navigation';

import { writable } from 'svelte/store';
import { error } from "@sveltejs/kit";

const loading = writable(false);
const navigating = writable(false);
const directory = writable("/");

export {loading, navigating, directory}; // function callers

let localValue, replaceVal = true;
directory.subscribe((val) => { localValue = val })

const fetchData = (url) => {
    return fetch(url)
        .then(async (e) => {
            directory.set(url);
            goto(e.url);
        })
}

const urlChanger = async (url) => { // not perfect, but better.
    event.preventDefault();

    if(localValue !== url) {
        loading.set(true);
        navigating.set(true);
        let page = fetchData(url)
        if (page) {
            loading.set(true);
        }

    }
}

export {urlChanger}; // function callers