import express from "express";
import { sequelize } from './database/postgre';
import { getItems, addItem, deleteItem } from './controllers/userController';

const server = express();

// Sync the database
sequelize.sync();

server.use(express.json());

server.get("/inventories", getItems);
server.post("/inventories", addItem);
server.delete("/inventories/:id", deleteItem);

server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));