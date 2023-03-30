
import { referencing } from "$lib/queries/internalReferencing.js";

let
    constants =
        `
            _id,
            'slug': slug.current,
            
            publishedAt,
            _updatedAt,
            
            categories[]->{
                _ref,
                _type,
                title,
            },   
            
            editor-> {
                fullName,
                handle,
                "slug": slug.current,
                userPortrait,
                profileBanner,
            },
            author-> {
                fullName,
                handle,
                "slug": slug.current,
                userPortrait,
                profileBanner,
            },
            
            desc[]{
                ...,
                markDefs[]{
                    ...,
                    ${referencing}
                },
            },
            gallery,
        `,

    artQuery =
        constants +
        `
        
        `,

    designQuery =
        constants +
        `
        
        `;

export { artQuery, designQuery };