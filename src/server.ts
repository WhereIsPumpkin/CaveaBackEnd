import express from "express";
import { createUser, getUsers } from './controllers/userController';


const server = express();

server.get("/", createUser);
server.get("/users", getUsers);

server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));