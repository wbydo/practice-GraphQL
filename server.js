const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Member {
    name: String
    gender: String
  }

  type Query {
    members(name: String, gender: String): [Member]
  }
`

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
    members: (_, args, ___, ____) => {
      const item = Object.keys(args)
      console.log(item)
      if (item.length === 0) {
        return members
      } else {
        return members.filter(member => member[item[0]] === args[item[0]])
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const app = express()
server.applyMiddleware({ app, path: '/graphql' });

app.listen(8080, () => {
  console.log('Now browse to localhost:8080/graphql')
})
