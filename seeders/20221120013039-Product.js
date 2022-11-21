'use strict';
const products=[
  {name:"Jerk Chicken",description:"Jack's juicy jerk chicken",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},
  {name:"Oxtail",description:"Served with rice and peas this is one of the heartiest and most delicious meals",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},
  {name:"Curry Goat",description:"Served with a special Caribbean twist",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},

  {name:"Shrimp Scampi",description:"Paired with any pasta of your choosing",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},
  {name:"Roast Lamb Rack",description:"Perfect hand held meat",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},
  {name:"Chicken Shawarma",description:"This chicken shawrama will transport you to the streets of the Middle East!",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},

  {name:"Bueno",description:"Kinder Bueno in a Chocolate Chip Cookie.",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},
  {name:"CLASSIC CHOCOLATE CHIP",description:"Straight up chocolate chip. Yum!",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},
  {name:"CHERRY BLASTERS",description:"Cherry Blasters Gummies in a Chocolate Chip Cookie",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},

  {name:"Burritos",description:"Any meat, rice and beans you could imagine",
  imageURL:"test",storefrontID:5,createdAt:new Date(),updatedAt: new Date()},
  {name:"Elote",description:"boiled and served on a stick",
  imageURL:"test",storefrontID:5,createdAt:new Date(),updatedAt: new Date()},
  {name:"Tacos",description:"hin strips of pork are sliced off a spit, placed on a corn tortilla and served with onions, coriander leaves and pineapple.",
  imageURL:"test",storefrontID:5,createdAt:new Date(),updatedAt: new Date()},
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',products)
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
