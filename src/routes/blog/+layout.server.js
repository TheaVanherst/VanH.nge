
import client from "$lib/sanityClient.js";
import { artQuery } from "$lib/queries/galleryPosts.js";

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "featuredProject":
            *[ _type == "artPost" && 
                "📌 Pinned" in categories[] -> title
            ] | order(publishedAt desc)
            {
                ${ artQuery }
            },
        }`);

    if (allQueries) {
        return allQueries;}
    else {
        throw new error(404, "No return searches found.");}
}
