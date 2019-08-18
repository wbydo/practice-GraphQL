const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Member {
    name: String
    gender: String
  }

  type Query {
    members: [Member]
  }
`)

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
  members: () => members
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true  // ブラウザにGraphiQLを表示したい場合true。falseならjsonが返される
}))
app.listen(8080, () => {
  console.log('Now browse to localhost:8080/graphql')
})
