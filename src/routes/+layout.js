
import client from "../lib/sanityClient.js";

let query =
    `*[_type == 'author' && fullName == "Thea Vanherst"]{
        'handle': handle,
        'fullName': fullName,
        'twitter': twitterURL,
        'portrait': userPortrait,
    }`

export const load = async () => {
    const userData = await client.fetch(query);

    if (!userData) {
        return [];
    }

    return [userData];

    console.log(userData)
}