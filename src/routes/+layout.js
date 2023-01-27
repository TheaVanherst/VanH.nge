
import client from "../lib/sanityClient.js";
import Error from './components/error.svelte';

let query =
    `*[_type == 'author' && fullName == "Thea Vanherst"]{
        'handle': handle,
        'fullName': fullName,
        'twitter': twitterURL,
    }`;

export const load = async (params) => {
    const userData = await client.fetch(query);
    if (params) {
        return [userData];
    } else {
        return Error;
    }
}