import cors from 'cors';
import {v4 as uuidv4} from 'uuid';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import './models/db.js';
import responseCachePlugin from 'apollo-server-plugin-response-cache';


import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import models from './models/index.js';


const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
  rootValue: {
    plot: null
  },
  plugins: [responseCachePlugin()]
});
await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});