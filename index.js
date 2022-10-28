const {ApolloServer,gql} = require('apollo-server');
const {Users,sequelize}=require('./models/users');
const {Vendors}=require('./models/vendors')

const port=process.env.PORT || '4000';

//typedefs
//resolvers

const typeDefs=gql`
    type User{
        id: ID!
        username: String!,
        password: String!
    }
    type Vendor{
        id: ID!
        username: String!,
        password: String!
    }
    type Query{
        users: [User]
        vendors: [Vendor]
        findUser(id: ID!): User
        findVendor(id: ID!): Vendor
    }
    type Mutation{
        addUser(username: String!,password: String!): User
        addVendor(username: String!,password: String!): Vendor
    }
`;
const resolvers={
    Query:{
        users: async(_,args)=>{
            const users=await Users.findAll({
                username,password
            })
            return users
        },
        vendors:async(_,args)=>{
            const vendors=await Vendors.findAll({
               username,password
            })
            return vendors
        },
        findUser: async(_,args)=>{
            const user=await Users.find((user)=>user.id===args.id)
            return user
            
        },
        findVendor: async(_,args)=>{
            const vendor=await Vendors.find((vendor)=>vendor.id===args.id)
            return vendor
            
        },
        

    }
}

const server = new ApolloServer({
    typeDefs,resolvers
})

server.listen(port,() => {
  console.log(`Server running at http:localhost:${port}`)
})
//import