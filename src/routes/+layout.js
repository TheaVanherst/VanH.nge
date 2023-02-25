
import client from "../lib/sanityClient.js";
import { error } from '@sveltejs/kit';

let query =
    `*[_type == 'author' && fullName == "Thea Vanherst"]{
        'handle': handle,
        'fullName': fullName,
        'twitter': twitterURL,
    }`;

export const load = async () => {
    const userData = await client.fetch(query);
    if (userData) {
        return userData;
    } else {
        throw new error(404, "Page userdata not found!")
    }
}