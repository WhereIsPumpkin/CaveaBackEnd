import { Request, Response } from "express";
import { Item } from '../models/Item';


export const getItems = async (req: Request, res: Response) => {
  const { location, sortBy } = req.query;
  let order: [string, string][];

  if (sortBy === 'price') {
    order = [['price', 'ASC']];
  } else {
    order = [['name', 'ASC']];
  }

  try {
    const items = await Item.findAll({
      where: location ? { location } : {},
      order,
    });
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
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

  //Add item location filter and sorting to getItems function