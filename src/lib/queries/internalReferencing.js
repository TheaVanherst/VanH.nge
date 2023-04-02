
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