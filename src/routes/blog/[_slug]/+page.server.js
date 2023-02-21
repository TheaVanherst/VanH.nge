
import client from "$lib/sanityClient.js";
import query from "$lib/queries/blogPosts"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { _slug } = params
    const postData = await client.fetch(`*[_type == 'blogPost' && slug.current == '${_slug}']{${query}}`);
    if (postData) {
        return postData;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}