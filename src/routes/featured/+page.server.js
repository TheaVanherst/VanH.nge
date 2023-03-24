
import client from "$lib/sanityClient.js";
import { blogPreviewQuery } from "$lib/queries/blogPosts"
import { artQuery } from "$lib/queries/galleryPosts.js";

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "featuredProject":
            *[ _type == "artPost" && 
                "📌 Pinned" in categories[] -> title
            ] | order(publishedAt desc)
            {
                ${ artQuery }
            },
        "featuredBlogPosts": 
            *[ _type == "blogPost" && 
                "📌 Pinned" in categories[] -> title
            ] | order(publishedAt desc){
                ${ blogPreviewQuery }
            }
    }`);

    if (allQueries.featuredProject) {
        return allQueries;
    } else {
        throw new error(404, "There was an searching for featured posts.")
    }
}