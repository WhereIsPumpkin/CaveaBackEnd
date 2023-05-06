const { Inventory } = require("./models/Inventory");
function generateRandomInventory() {
  const names = ["ინვენტარი1", "ინვენტარი2", "ინვენტარი3"];
  const locations = [
    "მთავარი ოფისი",
    "კავეა გალერია",
    "კავეა თბილისი მოლი",
    "კავეა ისთ ფოინთი",
    "კავეა სითი მოლი",
  ];
  const prices = [10.99, 20.99, 30.99, 50.23, 100.99, 200.99];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];

  return { name: randomName, location: randomLocation, price: randomPrice };
}

async function seed() {
  await sequelize.sync({ force: true }); // this will drop the table and recreate it

  const inventories = [];

  for (let i = 0; i < 300000; i++) {
    inventories.push(generateRandomInventory());
  }

  await Inventory.bulkCreate(inventories);

  console.log("Data has been seeded successfully!");
}

seed();
