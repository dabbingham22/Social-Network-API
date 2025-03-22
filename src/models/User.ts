import { Schema, model, type Document } from 'mongoose';

interface Iuser extends Document {
    username: string,
    email: string,
    thoughts: Schema.Types.ObjectId[],
    friends: Schema.Types.ObjectId[],

}

const userSchema = new Schema<Iuser>(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);

userSchema
  .virtual('friendCount')

  .get(function (this:Iuser) {
    return this.friends.length;
  });

const User = model<Iuser>('User', userSchema);

export default User;