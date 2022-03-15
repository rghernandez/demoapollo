
import movieResolvers from '../resolvers/movie.js'
import commentResolvers from '../resolvers/comments.js';
import GraphQLDate from 'graphql'
import weatherResolvers from '../resolvers/weather.js'

const customScalarResolver = {
    Date: GraphQLDate,
}


export default [customScalarResolver , movieResolvers, commentResolvers, weatherResolvers];