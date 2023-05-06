// Random მონაცემების დამატება ბაზაში ტესტისთვის

// import { sequelize } from './src/database/postgre';
// import { Inventory } from './src/models/Inventory';
// import { faker } from '@faker-js/faker';


// function generateInventoryItem() {
//   const locations = ['მთავარი ოფისი', 'კავეა გალერია', 'კავეა თბილისი მოლი', 'კავეა ისთ ფოინთი', 'კავეა სითი მოლი'];
//   return {
//     name: faker.commerce.productName(),
//     location: locations[Math.floor(Math.random() * locations.length)],
//     price: faker.commerce.price()
//   };
// }


// async function insertTestData() {
//   await sequelize.authenticate();
//   await sequelize.sync();

//   for (let i = 0; i < 500; i++) {
//     const inventoryItem = generateInventoryItem();
//     await Inventory.create(inventoryItem);
//   }

//   console.log('Test data inserted successfully!');
// }

// insertTestData();
