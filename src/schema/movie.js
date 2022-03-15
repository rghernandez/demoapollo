import { gql } from 'apollo-server-express';



export default gql`
  extend type Query {
    movies(cursor: String, limit: Int): MovieConnection!
    movie(id: ID!): Movie!
    offset(limit:Int,offset: Int):MovieConnection!
    allMovies: [Movie]
    available(available: Available): Boolean
    
  }

  extend type Mutation {
    createMovie(content: MovieContent!): Movie!
    editMovie(content: MovieContent, genres: String): Boolean
    deleteMovie(id: ID!): Boolean!
  }

  type MovieConnection{
    edges: [Movie!]
    pageInfo: PageInfo!
  }

  input MovieContent{
    title:String
    year: Int
    directors: String
  }

  enum Available {
      YES
      NO
  }

  type Theather{
    id: ID!
    theatherId: Int,
    location:Address
  }

  type Address{
    street:  String,
    city:String,
    state: String,
    zipcode:Int,
        
  
  }


  type PageInfo{
    hasNextPage: Boolean!
    endCursor: Date!
  }

  type Movie {
    id: ID!
    plot: String
    genres: [String]
    runtime: Int
    cast: [String]
    poster: [String]
    title: String
    fullplot:String
    languages: [String]
    released: Date
    directors: [String]
    year: Int
    rated: String
    countries: [String]
    lastupdated: Date
    num_mflix_comments: Int
    comments: [Comment]
    available: Available
  }

  
`; 
