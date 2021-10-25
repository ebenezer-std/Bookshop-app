const {ApolloServer, gql} = require('apollo-server');
const port = process.env.PORT || 80



const books =[
    {
        title: 'my First Copy book',
        Author:'Ebenezer Abbey',
        ISBN: '0-234-6784'
    },
    {
        title:'Jurassic Park',
        Author: 'kdueu kldjoij',
    }
]

//Schemas
const typeDefs= gql`
type Book{
    title: String!
    Author: String!

}
type Query{
    books:[Book]
    
}
# type Mutation{}

# type Subscription{}



`;

const resolvers = {
    Query: {
        books:()=>books,
        // book: tit => tit===books.title? books.title : null
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen(port).then(()=> console.log('running'))


//Resolvers

//typeDefs

