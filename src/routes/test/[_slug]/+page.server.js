
import client from "$lib/sanityClient";
import query from "$lib/queries/blogPosts"

import { error } from '@sveltejs/kit';
import artQuery from "$lib/queries/artPosts.js";

export const load = async ({params}) => {
    const { _slug } = params

    const allQueries = await client.fetch(`{
        "requestedProject":
            *[ _type == 'post' && 
                slug.current == '${_slug}'
            ]{ ${query} },
        "featuredProject": 
            *[ "📊 Featured" in categories[] -> title
            ]{ ${artQuery} }
    }`);

    if (allQueries.requestedProject) {
        return allQueries;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}