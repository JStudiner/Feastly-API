'use strict';
const vendors=[
  {name:"JacksJerkChicken",phoneNum:"647-537-9333" ,password: "abc123",createdAt:new Date(),updatedAt: new Date()},
  {name:"ManushsMashedPotatoes",phoneNum:"647-537-1234", password: "feastlyPM",createdAt:new Date(),updatedAt: new Date()},
  {name:"ConnorsCookies",phoneNum:"647-537-5678",password: "DBDev",createdAt:new Date(),updatedAt: new Date()},
  {name:"BensBiriyani",phoneNum:"647-537-9101",password: "FrontendDev",createdAt:new Date(),updatedAt: new Date()},
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
