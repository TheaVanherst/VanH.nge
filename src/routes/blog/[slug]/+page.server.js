
import client from "$lib/sanityClient.js";
import { blogQuery } from "$lib/queries/blogPosts.js"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { slug } = params
    let allQueries = await client.fetch(`{
        "requestedProject": 
            *[  _type == 'blogPost' && 
                slug.current == '${slug}'
            ]{
                ${ blogQuery }
            },
    }`);

    allQueries.contentsList = {
        title:     allQueries.requestedProject.map(x => x.title),
        contents:   allQueries.requestedProject.map(x => x.titles),
        preview:    false,
    };

    if (allQueries.requestedProject) {
        return allQueries;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}
