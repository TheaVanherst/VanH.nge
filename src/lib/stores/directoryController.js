
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

let urlStoreArr =   writable(["",""]); // handles the transition direction
let directionX =     writable(0); // handles the transition direction
let directionY =     writable(0); // handles the transition direction

const directionProcessing = (p,c) => {
    let xOffset = 0; // debugging purposes
    let pfr = p?.split("/")
    let cfr = c?.split("/")

    if (cfr.length ^ pfr.length) {
        // calculates which direction it should move horizontally
        if (cfr.length > pfr.length) {
            xOffset = 1;}
        else {
            xOffset = -1;}}
    else {
        xOffset = 0;}

    let yOffset = 0; // debugging purposes
    let pyo = navigation.findIndex(e => e.path === "/" + cfr[1])
    let cyo = navigation.findIndex(e => e.path === "/" + pfr[1]);

    if (!(xOffset ^ 0) && (pyo ^ cyo)) { // only moves if y isn't
        if (pyo > cyo) {
            yOffset = 1;}
        else {
            yOffset = -1;}
    } else {
        yOffset = 0;}

    cfr[0] === cfr[1] ? cfr.shift() : null;

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

    // url handling
    if(directoryString !== url) {
        await directionProcessing(directoryString, url);
        await fetchData(url);
    }

    // scroll handler

    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });
    // localScroll = 0;
};

export { urlChanger };
