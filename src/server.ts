import express from "express";
import { sequelize } from './database/postgre';
import { getInventories, addInventory, deleteInventory } from './controllers/userController';
import cors from 'cors';
import swaggerMiddleware from "./swagger-middleware.js";

const server = express();

server.use(cors())

sequelize.sync();

server.use(express.json());

server.get("/inventories", getInventories);
server.post("/inventories", addInventory);
server.delete("/inventories/:id", deleteInventory);
server.use("/", ...swaggerMiddleware);


server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));