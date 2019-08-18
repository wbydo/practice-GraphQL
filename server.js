const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    name: String
  }
`)

const root = {
  name: () => 'tarou'
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
