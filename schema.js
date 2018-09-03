const graphql = require('graphql');
const data = require('./data.json');

const PersonType = new graphql.GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
});

// 定义查询类型
const QueryType = new graphql.GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id:  { type: graphql.GraphQLString }
      },
      resolve: (_, args) => {
        return data[args.id]
      }
    }
  })
});

module.exports = function() {
  return new graphql.GraphQLSchema({
    query: QueryType
  });
}