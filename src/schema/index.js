import { gql } from 'apollo-server-express';


import movieschema from './movie.js';
import commentschema from './comments.js';
import weatherschema from './weather.js';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, movieschema, commentschema, weatherschema];