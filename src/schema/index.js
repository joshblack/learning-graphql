import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

let count = 0;

const rootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root query type of the schema.',
  fields: {
    count: {
      name: 'CountField',
      type: GraphQLInt,
      description: 'Retrieve the current count.',
      resolve: () => count,
    },
  },
});

const rootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The root mutation type of the schema.',
  fields: {
    incrementCount: {
      name: 'IncrementCount',
      type: GraphQLInt,
      description: 'Increment the current count by one.',
      resolve: (_, args) => {
        count += 1;

        return count;
      },
    },
    decrementCount: {
      name: 'DecrementCount',
      type: GraphQLInt,
      description: 'Decrement the current count by one.',
      resolve: (_, args) => {
        count -= 1;

        return count;
      },
    },
  },
});

/**
 * type GraphQLSchemaConfig = {
 *   query: GraphQLObjectType;
 *   mutation?: ?GraphQLObjectType;
 * };
 */

// A schema is created by supplying the root types of each operation, query
// and mutation (optional). A schema definition is then supplied to the
// validator and executor.
export default new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});
