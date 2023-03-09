
import client from "../lib/sanityClient.js";
import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "userData":
            *[  _type == 'author' && 
                fullName == "Thea Vanherst"
            ]{
                'handle': handle,
                'fullName': fullName,
                'twitter': twitterURL,
            }
        }`);

    if (allQueries.userData) {
        return allQueries;
    } else {
        throw new error(404, "Page userdata not found!")
    }
}