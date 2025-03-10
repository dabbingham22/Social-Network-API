import { Schema, Types, model, type Document } from 'mongoose';

interface Ithought extends Document {
    thoughtText: String,
    createdAt: Date,
    username: String,
    reactions: Schema.Types.ObjectId[]
}

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: number) => new Date(timestamp).toLocaleString(),
    },
});


const thoughtSchema = new Schema<Ithought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: (timestamp: number) => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
})

const Thought = model<Ithought>('Thought', thoughtSchema);

export default Thought;