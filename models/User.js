const { Schema, Types, model } = require('mongoose');

//schema to create new user model
const userSchema = new Schema(
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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
    ],
    },
    //indicates we want virtuals to be included with response
    {
        toJSON: {
          getters: true,
        },
     }
);

//virtual to retrieve the length of the user's friends 
userSchema
.virtual('friendCount')
.get(function() {
    return this.friends.length;
})

//initializes user model
const User = model('User', userSchema);
module.exports = User;