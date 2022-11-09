const {ApolloServer,gql} = require('apollo-server-express');
const express=require('express')
const typeDefs=require('./schema')
const resolvers=require('./resolvers')
const models=require('./models/index')


const port=process.env.PORT || '4000';
const app=express()

async function startServer(){
    server = new ApolloServer({
        typeDefs,resolvers, context:{models}
    })
    await server.start()
    server.applyMiddleware({app})
}
const cors = require('cors');
app.use(cors())
startServer()
models.sequelize.authenticate();
models.sequelize.sync();

app.listen(port,() => {
  console.log(`Server running at http:localhost:${port}${server.graphqlPath}`)
})
//import