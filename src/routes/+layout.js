
import client from "../lib/sanityClient.js";
import { error } from '@sveltejs/kit';

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
        throw new error(100, "Page userdata not found!")
    }
}