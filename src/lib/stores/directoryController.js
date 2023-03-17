
import { writable } from 'svelte/store';

// navigation fetch vars

const loading =     writable(false);
const navigating =  writable(false);
const directory =   writable("/");

export { loading, navigating, directory };

let directoryString; // god i hate this
    directory.subscribe((val) => { directoryString = val });

// navigation controller

import navigation from "$lib/stores/navigationDirectories.js";

let urlStoreArr =   writable([""]); // handles the transition direction
let directionX =    writable(0); // handles the transition direction
let directionY =    writable(0); // handles the transition direction

const directionProcessing = async (p,c) => {
    // calculates which direction it should move horizontally
    let xOffset = 0; // debugging purposes
    let pfr = p.split("/"); // "" is a fallback to prevent empty strings generated by
    let cfr = c.split("/"); // the router controller. Don't ask.

    if (cfr.length ^ pfr.length) {
        if (pfr.length > cfr.length) {
            xOffset = 1;} //   forwards
        else {
            xOffset = -1;}} // backwards

    // calculates which direction it should move vertically
    let yOffset = 0; // debugging purposes
    let pyo = navigation.findIndex(e => e.path === "/" + cfr[1]);
    let cyo = navigation.findIndex(e => e.path === "/" + pfr[1]);

    if (!(xOffset ^ 0) && (pyo ^ cyo)) { // only moves if x isn't
        if (pyo > cyo) {
            yOffset = 1;}   // upwards
        else {
            yOffset = -1;}} // downwards

    // sets writable memory for fetching.
    directionY.set(yOffset);
    directionX.set(xOffset);
    urlStoreArr.set(cfr);
}

export { urlStoreArr, directionX, directionY}

// overall URL handler

import { goto } from '$app/navigation';

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
    url = !url ? "/" : url //god I hate this so much, but the tldr is;

        // to fetch the homepage ("https://*website*"), you HAVE to specify "/" when redirecting.
        // the problem is, that the way how the url builders work is that doing it any other way
        // either breaks the directory router or breaks the url router.

    // Just leave it, I promise it's for the greater good.

    // url handling
    if(directoryString !== url) {
        await directionProcessing(directoryString, url);
        await fetchData(url);
    }
};

export { urlChanger };
