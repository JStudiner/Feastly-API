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
type Storefront{
    id: Int!
    name:String!
    description:String!
    longitude:Float!
    latitude:Float!
    hours:String!
    tag1:String
    tag2:String
    tag3:String
    vendorID:Int!
}
type Product{
    id: Int!
    name:String!
    price:Float!
    description:String!
    imageURL:String!
    storefrontID:Int!
}
type Order{
    cost:String!
    current:Boolean!
    userID:Int!
    storefrontID:Int!
}   
type OrderedProduct{
    orderID:Int!
    productID:Int!
    quantity:Int!
}
type Query{
    getUser(id: Int!): User
    getAllUsers:[User!]!
    getAllVendors:[Vendor!]!
    getVendorByID: Vendor
    getVendorByPhoneNum: Vendor
    getUserByPhoneNum(phoneNum:String!):User
    currentUser: User
    currentVendor: Vendor
    getAllStorefronts:[Storefront!]!
    getProductByStorefront(storefrontID: Int!):[Product]
}
type Mutation{
    loginUser(phoneNum: String!, password: String!): User!
    loginVendor(phoneNum: String!, password: String!): Vendor!
    createUser(name: String!,phoneNum: String!, password: String!): User!
    createVendor(name: String!,phoneNum: String!, password: String!): Vendor!
    createStorefront(name:String!,description:String!,longitude:Float!,latitude:Float!,hours:String!,tag1:String,tag2:String,tag3:String,vendorID:Int!):Storefront!
    createProduct(name:String!,description:String!,imageURL:String!,storefrontID:Int!):Product!
    createOrder(cost:String!,current:Boolean!,userID:Int!,storefrontID:Int!):Order!
    createOrderedProduct(orderID:Int!,productID:Int!,quantity:Int!):OrderedProduct!
}
`
module.exports=typeDefs