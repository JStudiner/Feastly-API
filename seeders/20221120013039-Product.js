'use strict';
const products=[
  {name:"Jerk Chicken",price:12.99,description:"Jack's juicy jerk chicken",
  imageURL:"test",storefrontID:1,createdAt:new Date(),updatedAt: new Date()},
  {name:"Oxtail",price:13.50,description:"Served with rice and peas this is one of the heartiest and most delicious meals",
  imageURL:"test",storefrontID:1,createdAt:new Date(),updatedAt: new Date()},
  {name:"Curry Goat",price:10.99,description:"Served with a special Caribbean twist",
  imageURL:"test",storefrontID:1,createdAt:new Date(),updatedAt: new Date()},

  {name:"Shrimp Scampi",price:21.99,description:"Paired with any pasta of your choosing",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},
  {name:"Roast Lamb Rack",price:23.99,description:"Perfect hand held meat",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},
  {name:"Chicken Shawarma",price:28.99,description:"This chicken shawrama will transport you to the streets of the Middle East!",
  imageURL:"test",storefrontID:2,createdAt:new Date(),updatedAt: new Date()},

  {name:"Bueno",price:2.99,description:"Kinder Bueno in a Chocolate Chip Cookie.",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},
  {name:"CLASSIC CHOCOLATE CHIP",price:1.99,description:"Straight up chocolate chip. Yum!",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},
  {name:"CHERRY BLASTERS",price:2.99,description:"Cherry Blasters Gummies in a Chocolate Chip Cookie",
  imageURL:"test",storefrontID:3,createdAt:new Date(),updatedAt: new Date()},

  {name:"Burritos",price:8.99,description:"Any meat, rice and beans you could imagine",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},
  {name:"Elote",price:4.99,description:"boiled and served on a stick",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},
  {name:"Tacos",price:5.99,description:"hin strips of pork are sliced off a spit, placed on a corn tortilla and served with onions, coriander leaves and pineapple.",
  imageURL:"test",storefrontID:4,createdAt:new Date(),updatedAt: new Date()},
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
