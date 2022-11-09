const {gql} =require('apollo-server-express')
const typeDefs=gql`
type User{
    id: Int!
    name: String!
    phoneNum: String!
    password: String!
}
type Vendor{
    id: Int!
    name: String!
    phoneNum: String!
    password: String!
}
type Query{
    getUser(id: Int!): User
    getAllUsers:[User!]!
    getAllVendors:[Vendor!]!
    currentUser: User
    currentVendor: Vendor
}
type Mutation{
    loginUser(phoneNum: String!, password: String!): User!
    loginVendor(phoneNum: String!, password: String!): Vendor!
    createUser(name: String!,phoneNum: String!, password: String!): User!
    createVendor(name: String!,phoneNum: String!, password: String!): Vendor!
}
`
module.exports=typeDefs