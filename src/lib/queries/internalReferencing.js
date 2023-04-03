
import { authorToolTips } from "$lib/queries/authorData.js";
import { blogToolTips } from "$lib/queries/blogPosts.js";

let referencing =
    `
        _type == "internalLink" => {
            ...,
            "format": @.reference->_type,
            @.reference->
                _type == "author" => {
                    "data": @.reference-> {
                        ${authorToolTips}
                    }
                },
            @.reference->
                _type == "blogPost" => {
                    "data": @.reference-> {
                        ${blogToolTips}
                    }
                },
        },
    `

export { referencing }

let featuredId = "2d4b9a3b-4c88-46b5-8355-229f6f509e2a";
let pinnedId = "505b9480-cf02-42f3-902c-0a9c10c2801b";

export { featuredId, pinnedId }