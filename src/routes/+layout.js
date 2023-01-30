
import client from "../lib/sanityClient.js";
import error from './components/error.svelte';

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
        return {
            status: 500,
            body: error
        };
    }
}