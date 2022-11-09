const { UUIDV4 } = require("sequelize")
const { sequelize } = require("./models")

const resolvers={
    Query:{
        async getUser(root,{id},{models}){
            return models.Users.findByPk(id)
        },
        async getAllUsers (root, args, { models }){
            return models.Users.findAll()
        }, async getAllVendors (root, args, { models }){
            return models.Vendors.findAll()
        },
        async currentUser(_,args,{models}){
            const user =await models.Users.findOne({
                order: sequelize.random()
            })
            return user
        },
        async currentVendor(_,args,{models}){
            const vendor =await models.Users.findOne({
                order: sequelize.random()
            })
            return vendor
        }
    },
    Mutation:{
        async loginUser(root, {phoneNum,password},{models}){
            const user=await models.Users.findOne({where:{phoneNum: phoneNum}})
            if (!user){
                throw new Error('User not found!')
            }
            
            const validPassword=password==user.password ? true : false
            if(!validPassword){
                throw new Error('Invalid password!')
            }
            return user
        },
        async loginVendor(root, {phoneNum,password},{models}){
            
            const vendor=await models.Vendors.findOne({where:{phoneNum: phoneNum}})
            if(!vendor){
                throw new Error('User not found!')
            }
            const validPassword=password===vendor.password ? true : false
            if(!validPassword){
                throw new Error('Invalid password!')
            }
            return vendor
        },
        async createUser (root, { name, phoneNum,password }, { models }) {
            return models.Users.create({
            name,
            phoneNum,
            password
            })
            },
        async createVendor(root,{name,phoneNum,password},{models}){
            return models.Vendors.create({
                name,
                phoneNum,
                password
            })
        }
    }
}
module.exports=resolvers