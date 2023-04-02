
import { referencing } from "$lib/queries/internalReferencing.js";

let
    constants =
        `
            _id,
            'slug': slug.current,
            
            title,
            'headerImage': mainImage,
            
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
        `,

    blogPreviewQuery =
        constants +
        `
            body[0...4],
        `,

    blogQuery =
        constants +
        `
            body[]{
                ...,
                markDefs[]{
                    ...,
                    ${referencing}
                },
            },
            
            'titles': 
                body[][
                    style == "h4" || 
                    style == "h3" || 
                    style == "h2" || 
                    style == "h1"
                ],
        `,

    blogToolTips =
        `
            'slug': slug.current,
            
            title,
            'headerImage': mainImage,
            
            publishedAt,
            _updatedAt,
        `;



export { blogPreviewQuery, blogQuery, blogToolTips};