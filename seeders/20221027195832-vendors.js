'use strict';
const vendors=[
  {username:"JacksJerkChicken",password: "abc123",createdAt:new Date(),updatedAt: new Date()},
  {username:"ManushsMashedPotatoes",password: "feastlyPM",createdAt:new Date(),updatedAt: new Date()},
  {username:"ConnorsCookies",password: "DBDev",createdAt:new Date(),updatedAt: new Date()},
  {username:"BensBiriyani",password: "FrontendDev",createdAt:new Date(),updatedAt: new Date()},
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('Vendors', vendors);
    
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
