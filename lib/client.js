import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: '8dbi2di4',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skA7QOuu1UOEVuF0mO3uw2a7hCqjLWcucPcqFEM3NJgG18JSMm25UqoGBV8bkguoshWwmqCX4dBY49Z1PGc4jVnCTDte06QgFWzJ1UsCk94j9bIoBpvM1MLx3Xk6QiYXzm6qCCB84CrWUQhIx4G4zJuZ3bXO2OaMnEMFKB9CZhSDHKSNjTPD', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source)