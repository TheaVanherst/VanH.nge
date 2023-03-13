
import client from      "$lib/sanityClient.js";
import { blogQuery } from   "$lib/queries/blogPosts.js"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { _slug } = params
    const allQueries = await client.fetch(`{
        "requestedProject": 
            *[  _type == 'blogPost' && 
                slug.current == '${_slug}'
            ]{
                ${ blogQuery }
            }
    }`);

    if (allQueries.requestedProject) {
        return allQueries;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}
