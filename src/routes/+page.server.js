
import client from "$lib/sanityClient.js";
import blogQuery from "$lib/queries/blogPreviews.js"
import artQuery from "$lib/queries/artPosts.js";

import { error } from '@sveltejs/kit';

export const load = async () => {
    const artData = await client.fetch(`
        *[_type == "artPost" && 
          "📌 Pinned" in categories[] -> title
        ] | 
        order( select(
            defined(publishedAt) => publishedAt,
            defined(_createdAt) => _createdAt
        ) desc)
        {
            ${artQuery}
        }
    `);

    const blogData = await client.fetch(`
        *[_type == "blogPost" && 
          "📌 Pinned" in categories[] -> title
        ] | 
        order( select(
            defined(publishedAt) => publishedAt,
            defined(_createdAt) => _createdAt
        ) desc){
            ${blogQuery}
        }`
    );

    if (blogData.length > 0 || artData.length > 0) {
        return [artData, blogData];
    } else {
        throw new error(404, "There was an searching for featured posts.")
    }
}