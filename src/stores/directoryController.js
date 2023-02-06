
import { writable } from 'svelte/store';
import { error } from "@sveltejs/kit";

const loading = writable(false);
const navigating = writable(false);
const directory = writable("/");

export {loading, navigating, directory}; // function callers

let localValue;
directory.subscribe((val) => { localValue = val })

const urlChanger = async (url) => {
    if(localValue !== url) {
        loading.set(true);
        navigating.set(true);
        const res = await self.fetch(url);
        const data = res.json();
        if (data) {
            let check = await navigating === false;
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