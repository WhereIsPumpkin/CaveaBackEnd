import { Request, Response } from "express";
import { Item } from '../models/Item';


export const getItems = async (req: Request, res: Response) => {
    const items = await Item.findAll();
    res.json(items);
};

export const addItem = async (req: Request, res: Response) => {
    const { name, location, price } = req.body;
  
    try {
      const newItem = await Item.create({ name, location, price });
      res.json(newItem);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

  export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const item = await Item.findByPk(id);
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      await item.destroy();
      res.json({ message: 'Item deleted' });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };