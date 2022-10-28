'use strict';
const users=[
  {username:"Jack",password: "abc123",createdAt:new Date(),updatedAt: new Date()},
  {username:"Manush",password: "feastlyPM",createdAt:new Date(),updatedAt: new Date()},
  {username:"Connor",password: "DBDev",createdAt:new Date(),updatedAt: new Date()},
  {username:"Ben",password: "FrontendDev",createdAt:new Date(),updatedAt: new Date()},
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
