import client from "$lib/sanityClient.js";
import query from "$lib/queries/blogPosts.js"

import { error } from '@sveltejs/kit';

export const load = async ({params}) => {
    const { _slug } = params
    const postData = await client.fetch(`*[_type == 'post' && slug.current == '${_slug}']{${query}}`);
    if (postData) {
        return postData;
    } else {
        throw new error(404, "Nothing here but us deer.")
    }
}