import client from "$lib/sanityClient.js";
import query from "$lib/queries/blogPreviews"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const postData = await client.fetch(`*[_type == 'blogPost']  | order(select(
            defined(publishedAt) => publishedAt,
            defined(_createdAt) => _createdAt
        ) desc)[0..5] {${query}}`);
    if (postData.length > 0) {
        return [postData];
    } else {
        throw new error(404, "No return searches found.")
    }
}
