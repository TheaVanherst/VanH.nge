
import client       from "$lib/sanityClient.js";
import { error }    from '@sveltejs/kit';

import { artQuery } from "$lib/queries/galleryPosts.js";
import { pinnedId } from "$lib/queries/internalReferencing.js";

export const load = async () => {
    let allQueries;
        allQueries = await client.fetch(`{
        "featuredProject":
            *[ _type == "artPost" && 
                "${ pinnedId }" in categories[] -> _id 
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
