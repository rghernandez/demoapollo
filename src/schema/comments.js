import { gql } from 'apollo-server-express';


export default gql`
  extend type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
  }
 
  type Comment {
    id: ID!
    name: String
    email: String
    movie_id: String
    text: String
    date: String
  }
`; 