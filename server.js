const express = require('express')
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  printSchema
} = require('graphql')

const Member = new GraphQLObjectType({
  name: 'Member',
  fields: {
    name: { type: GraphQLString },
    gender: { type: GraphQLString }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    members: {
      type: new GraphQLList(Member),
      // args: {
      //   name: { type: GraphQLString },
      //   gender: { type: GraphQLString }
      // }
    }
  }
})

const members = [
  {
    name: 'tarou',
    gender: 'man'
  },
  {
    name: 'hanako',
    gender: 'woman'
  },
  {
    name: 'yoshiko',
    gender: 'woman'
  }
]

const resolvers = {
  Query: {
    members: () => {
      console.log('hoge')
      return members
    }
  }
}

const schema = new GraphQLSchema({query: Query});

const executableSchema = makeExecutableSchema({
  typeDefs: printSchema(schema),
  resolvers
})

const app = express()
const server = new ApolloServer({ schema: executableSchema });

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8080, () => {
  console.log('Now browse to localhost:8080/graphql')
})
