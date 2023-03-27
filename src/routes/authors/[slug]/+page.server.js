
import client           from "$lib/sanityClient.js";
import { authorQuery }  from "$lib/queries/authorData"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { slug } = params
    const allQueries = await client.fetch(`{
        "requestedAuthor": 
            *[  _type == 'author' && slug.current == '${slug}'
            ]{
                ${authorQuery}
            }
    }`);

    if (allQueries.requestedAuthor) {
        return allQueries;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}
