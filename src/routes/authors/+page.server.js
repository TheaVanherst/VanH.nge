
import client from "$lib/sanityClient";
import { authorPreviewQuery } from "$lib/queries/authorData"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "authorRequests":
            *[ _type == 'author']{
                ${authorPreviewQuery}
            }       
    }`
    );

    if (allQueries.authorRequests) {
        return allQueries;
    } else {
        throw new error(404, "No return searches found.")
    }
}
