
import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    token: '', // or leave blank for unauthenticated usage
    useCdn: true,
});

export default client;