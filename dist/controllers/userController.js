import { User, Thought } from '../models/index.js';
export const friendCount = async (userId) => {
    const user = await User.findById(userId).populate('friends');
    if (!user) {
        throw new Error('User not found');
    }
    return user.friends.length;
};
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                message: 'User cannot found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const createUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const newUser = await User.create({
            username,
            email
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
        if (!user) {
            res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and thoughts deleted!' });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const addFriend = async (req, res) => {
    console.log('You are adding a friend');
    console.log(req.body);
    try {
        const { friendId } = req.body;
        if (!friendId) {
            return res.status(400).json({ message: 'Friend ID is required' });
        }
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: friendId } }, { runValidators: true, new: true });
        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }
        return res.json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
export const removeFriend = async (req, res) => {
    try {
        console.log(req.params);
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendsId } }, { runValidators: true, new: true });
        if (!user) {
            return res.status(404).json({
                message: 'No user found with that ID',
            });
        }
        return res.json({ message: 'Friend successfully removed' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
