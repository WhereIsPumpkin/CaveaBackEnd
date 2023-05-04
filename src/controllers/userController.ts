import { Request, Response } from "express";
import { User } from '../models/User';

export const createUser = async (req: Request, res: Response) => {
    await User.sync();
    await User.create({ firstName: "John", lastName: "Doe" });
    res.send("User created!");
};

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
};