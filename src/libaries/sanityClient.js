import sanityClient from "@sanity/client"

const client = sanityClient({
    projectId: "ydhblbds",
    dataset: "blog-posts",
    apiVersion: "v2021-10-21",
    useCdn: true,
});

export default client;