import { Schema, Types, model, type Document } from 'mongoose';

interface Ithought extends Document {
    thoughtText: String,
    createdAt: Date,
    username: String,
    reactions: Schema.Types.ObjectId[]
}

const thoughtSchema = new Schema<Ithought>(
    {
        thoughtText: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
            },
        ]
})

const Thought = model<Ithought>('Thought', thoughtSchema);

export default Thought;