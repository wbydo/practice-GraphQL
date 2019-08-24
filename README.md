# practice-GraphQL

## phase1
「[はじめてのGraphQL。MySQLの接続まで。 - Qiita](https://qiita.com/raihara3/items/fe8803d64d349b045019)」を参考に手を動かした記録

## phase2
`buildSchema`で書いていた部分は`GraphQLSchema`関数でも良いらしいので書き換える

### 参考
- [Constructing Types | Advanced Guides](https://graphql.org/graphql-js/constructing-types/)
- >これは完全に上述のGraphQLサーバーの実装次第です。
  >> [GraphQLを使って実装してみよう - Qiita](https://qiita.com/haradakunihiko/items/a91a66e35031212023e3)

### 感想
↓の意味がわかった。
> GraphQLSchema インスタンスを直接コンストラクトする表現。 resolve 定義など何でもできますが、手作業では書きたくないですね。
>> [GraphQL の色々なスキーマ表現について - GraphQL Schema Language や schema.json - きみはねこみたいなにゃんにゃんなまほう](http://lightbulbcat.hatenablog.com/entry/2018/02/18/000135)

## phase3
- express-graphqlをApollo Serverに代替する
- `GraphQLSchema`関数がapolloと合わないのでphase2の変更をリセット

### 参考
- [Express - Apollo Docs](https://www.apollographql.com/docs/graphql-subscriptions/express/#gatsby-focus-wrapper)
- [Apollo+Expressで始めるGraphQL超入門 ~ GraphQLをざっくり理解する - Qiita](https://qiita.com/zonomaa/items/5de4b14dcd839db5f148)
- ナナメ読みしたところrootValueとresolverはそのまま置き換えてよさそう（凝ったことをする場合を除く）
  - ソース: [graphql を実行しながら GraphQLSchema と resolver、rootValue まわりの評価の仕組みを考える - きみはねこみたいなにゃんにゃんなまほう](http://lightbulbcat.hatenablog.com/entry/2018/01/27/003623#rootValue-%E3%81%AA%E3%81%97%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B)
- expressとの組み合わせ方。最新版
  - [Migrating to v2.0 - Apollo Docs](https://www.apollographql.com/docs/apollo-server/migration-two-dot/#stand-alone)

### 知見
- `graphql`パッケージ由来の関数で書く場合と`apollo-server`由来の関数で書く場合で`resolver`に要求されるオブジェクトの形が異なる
- `GraphQLSchema`関数で生成したオブジェクトを`ApolloServer`に綺麗に渡せないので、現状の組み合わせの場合は素直にGraphQLのDSL書いたほうがよい
