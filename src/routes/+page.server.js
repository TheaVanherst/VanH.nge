
import client from "$lib/sanityClient.js";
import blogQuery from "$lib/queries/blogPreviews.js"
import artQuery from "$lib/queries/artPosts.js";

import { error } from '@sveltejs/kit';

export const load = async () => {
    const allQueries = await client.fetch(`{
        "featuredProject":
            *[  _type == "artPost" && 
                "📌 Pinned" in categories[] -> title
            ] | 
            order( select(
                defined(publishedAt) => publishedAt,
                defined(_createdAt) => _createdAt
            ) desc)
            {
                ${artQuery}
            },
        "featuredBlogPosts": 
            *[  _type == "blogPost" && 
                "📌 Pinned" in categories[] -> title
            ] | 
            order( select(
                defined(publishedAt) => publishedAt,
                defined(_createdAt) => _createdAt
            ) desc){
                ${blogQuery}
            }
    }`);

    if (allQueries.featuredProject) {
        return allQueries;
    } else {
        throw new error(404, "There was an searching for featured posts.")
    }
}