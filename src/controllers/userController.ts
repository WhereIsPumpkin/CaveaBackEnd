import { Request, Response } from "express";
import { Inventory } from '../models/Inventory';

export const getInventories = async (req: Request, res: Response) => {
  const { location, sortBy } = req.query;
  let order: [string, string][];

  if (sortBy === 'price') {
    order = [['price', 'ASC']];
  } else {
    order = [['name', 'ASC']];
  }

  try {
    const inventories = await Inventory.findAll({
      where: location ? { location } : {},
      order,
    });
    res.json(inventories);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const addInventory = async (req: Request, res: Response) => {
  const { name, location, price } = req.body;

  try {
    const newInventory = await Inventory.create({ name, location, price });
    res.json(newInventory);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteInventory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: 'Inventory not found' });
    }

    await inventory.destroy();
    res.json({ message: 'Inventory deleted' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

