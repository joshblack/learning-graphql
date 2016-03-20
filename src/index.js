import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

const PORT = 3000;
const app = express();

const MyFirstSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        name: 'HelloField',
        type: GraphQLString,
        description: 'Hello world from documentation',
        resolve: () => 'world',
      },
    },
  }),
});

app.use('/graphql', graphqlHTTP({
  schema: MyFirstSchema,
  graphiql: true,
}));

app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}/graphql`);
});

