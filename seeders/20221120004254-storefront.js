'use strict';

const storefronts=[
  {name:"Jack's Jerk Chicken",description:"A great place to get the most delicious chicken around!",
  longitude:-76.503,latitude:44.2342,hours:"SS9-17M9-17T9-17W9-17TT9-17F9-17SX",tag1:"Chicken",
vendorID:1,createdAt:new Date(),updatedAt: new Date()},
{name:"Manush's Mediterranean Cuisine",description:"Delicious mediterranean cuisine",
  longitude:-76.49,latitude:44.233,hours:"SS9-17M9-17T9-17W9-17TT9-17F9-17S9-17",tag1:"Mediterranean",tag2:"Italian",tag3:"Greek",
vendorID:2,createdAt:new Date(),updatedAt: new Date()},
{name:"Connor's Cookies",description:"Moist Tasty Cookies!",
  longitude:-76.49,latitude:44.2342,hours:"SS9-21M9-21T9-17W9-17TT9-17F9-17SX",tag1:"Cookies",tag2:"Dessert",
vendorID:3,createdAt:new Date(),updatedAt: new Date()},
{name:"Ben's Burritos",description:"Burritos, Tacos, and everything inbetween",
  longitude:-76.485,latitude:44.233,hours:"SS9-17M9-17T9-17XTT9-17F9-17S9-17",tag1:"Mexican",
vendorID:4,createdAt:new Date(),updatedAt: new Date()},
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Storefronts',storefronts)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
