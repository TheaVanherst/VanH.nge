
import client from "$lib/sanityClient.js";
import { designQuery } from "$lib/queries/galleryPosts.js"

import { error } from '@sveltejs/kit';

let referenceTypes = {
    "tags" : `in categories[] -> title`,
    "author" : `== author -> slug.current`
}

export const load = async ({params}) => {
    const { query } = params

    let queryString = "", //request string for specific query types prompted by [[query]]
        allQueries;

    if (!!query){
        let queryPartition = query.split('&');

        for (let e in queryPartition) {
            let query = queryPartition[e].split('=');

            if (query.length === 2){

                let queryArray = [],
                    queryType = query[0],
                    queryReqT = query[1].split(':');

                for (let i in queryReqT){
                    queryArray[i] = `"${queryReqT[i]}" ${referenceTypes[queryType]}`
                }

                queryString += ` && ${queryArray.join(' || ')}`

            }
        }
    }

    allQueries = await client.fetch(`{
        "postRequests": 
            *[  _type == 'designPost' 
                ${queryString}
            ] | 
            order(publishedAt desc)[0..20] {
                ${ designQuery }
            },
        "specifiedTags":
            *[ _type == 'designCategory'
            ] {
                title
            }
    }`);

    allQueries.queryString = queryString;

    if (allQueries.postRequests) {
        return allQueries;}
    // else {
    //     throw new error(404, "No return searches found.");}
}
