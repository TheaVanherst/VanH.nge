
import { writable } from 'svelte/store';
import { error } from "@sveltejs/kit";

const loading = writable(false);
const navigating = writable(false);
const directory = writable("/");

export {loading, navigating, directory}; // function callers

let localValue;
directory.subscribe((val) => { localValue = val })

const urlChanger = async (url) => { // not perfect, but better.
    if(localValue !== url) {
        loading.set(true);
        navigating.set(true);
        const res = await self.fetch(url);
        if (res.ok) {
            let check = await navigating === false; // this doesn't fucking work lol
            if (!check) {
                directory.set(url);
                loading.set(false);
            }
        } else {
            throw new error(404, "Page not found.")
        }
    }
}

export {urlChanger}; // function callers