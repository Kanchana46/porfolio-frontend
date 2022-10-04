import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'y1ekj92b',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skADmFIyO1lhVRUB1arL9spLXvnKusmR0sCGOk3hIRNYG6ebg6VQuFG9sja0uflfr3BqIFw2qLbw1Mkhei177nhwKgPUly7RZPeWXjtwmBVJlhZv30bGjGAQbStOr2TCDSPjz8zopx5MJ8IU7eIIb0jywPbcLHWbcLEXkNdZyIExRcLJWpAs'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);