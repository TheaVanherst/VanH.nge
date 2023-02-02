
import { writable } from 'svelte/store';
import { error } from "@sveltejs/kit";

const loading = writable(false);

const directory = writable("/");

const getPage = async (page) => {
    const res = await fetch(page);
    if (res.ok) {
        return page;
    } else {
        throw new error(404, "Page not found.")
    }
}

export {loading, directory, getPage};