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
