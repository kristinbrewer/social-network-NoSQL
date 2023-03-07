const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//schema to create new Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use a getter mthod to format the timestamp on query 
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

thoughtSchema
.virtual('reactionCount')
//getter
.get(function (){
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;