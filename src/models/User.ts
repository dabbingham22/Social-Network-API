import { Schema, model, type Document } from 'mongoose';

interface Iuser extends Document {
    username: string,
    email: string,
    thoughts: [],
    friends: Schema.Types.ObjectId[],

}

const userSchema = new Schema<Iuser>(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        thoughts: {

        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'friend',
            },
        ]

});

const User = model<Iuser>('User', userSchema);

export default User;