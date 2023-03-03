
import client from "$lib/sanityClient.js";
import query from "$lib/queries/blogPreviews.js"

import { error } from '@sveltejs/kit';

export const load = async () => {
    const postData = await client.fetch(`*[_type == "blogPost" && "📌 Pinned" in categories[] -> title]{${query}}`);

    if (postData.length > 0) {
        return [postData];
    } else {
        throw new error(404, "No return searches found.")
    }
}