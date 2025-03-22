import { Thought } from '../models/index.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const getThoughtById = async (req, res) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (thought) {
            res.json(thought);
        }
        else {
            res.status(404).json({
                message: 'Thought not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const createThought = async (req, res) => {
    console.log('You are creating a thought');
    console.log(req.body);
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });
        if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(thought);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            res.status(404).json({
                message: 'No thought with that ID'
            });
        }
        else {
            // await Reaction.deleteMany({ _id: { $in: thought.reactions } });
            res.json({ message: 'Thought and reactions deleted!' });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const addReaction = async (req, res) => {
    console.log('You are adding an reaction');
    console.log(req.body);
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true });
        if (!thought) {
            return res
                .status(404)
                .json({ message: 'No thought found with that ID :(' });
        }
        return res.json(thought);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
export const deleteReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndDelete({ _id: req.params.reactionId });
        if (!reaction) {
            return res.status(404).json({ message: 'No such reaction exists' });
        }
        const thought = await Thought.findOneAndUpdate({ students: req.params.reactionId }, { $pull: { reactions: req.params.reactionId } }, { new: true });
        if (!thought) {
            return res.status(404).json({
                message: 'Reaction deleted, but no thought found',
            });
        }
        return res.json({ message: 'Reaction successfully deleted' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
