const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
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
      args: {
        name: { type: GraphQLString },
        gender: { type: GraphQLString }
      }
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

const root = {
  members: (search) => {
    const item = Object.keys(search)
    if (item.length === 0) {
      return members
    } else {
      return members.filter(member => member[item[0]] === search[item[0]])
    }
  }
}

const schema = new GraphQLSchema({query: Query});

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true  // ブラウザにGraphiQLを表示したい場合true。falseならjsonが返される
}))
app.listen(8080, () => {
  console.log('Now browse to localhost:8080/graphql')
})
