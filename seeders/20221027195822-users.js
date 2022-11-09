'use strict';
const users=[
  {name:"Jack",phoneNum:"647-537-9333" ,password: "abc123",createdAt:new Date(),updatedAt: new Date()},
  {name:"Manush",phoneNum:"647-537-9111" ,password: "feastlyPM",createdAt:new Date(),updatedAt: new Date()},
  {name:"Connor",phoneNum:"647-537-1234" ,password: "DBDev",createdAt:new Date(),updatedAt: new Date()},
  {name:"Ben",phoneNum:"647-537-0000" ,password: "FrontendDev",createdAt:new Date(),updatedAt: new Date()},
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Users', users);
    
  },

   down: (queryInterface, Sequelize)=> {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
