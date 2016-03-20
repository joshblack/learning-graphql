'use strict';

var express = require('express');
var GraphQL = require('graphql');
var graphqlHTTP = require('express-graphql');

var GraphQLSchema = GraphQL.GraphQLSchema;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLObjectType = GraphQL.GraphQLObjectType;

var app = express();

var MyFirstSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        name: 'HelloField',
        type: GraphQLString,
        description: 'Hello world from documentation',
        resolve: function resolve() {
          return 'world';
        },
      },
    },
  }),
});

app.use('/graphql', graphqlHTTP({
  schema: MyFirstSchema,
  graphiql: true,
}));

app.listen(3000, function () {
  console.log('Server listening on http://localhost:' + 3000 + '/graphql');
});

