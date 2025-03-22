import { Request, Response } from 'express';
import { User } from '../models/index.js';

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(error: any){
        res.status(500).json({
            message: error.message
        });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      if(user) {
        res.json(user);
      } else {
        res.status(404).json({
          message: 'User cannot found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

export const createUser = async (req: Request, res: Response) => {
  const { user } = req.body;
  try {
    const newUser = await User.create({
      user
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      res.status(404).json({ message: 'No user with this id!' });
    }

    res.json(user)
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
};
