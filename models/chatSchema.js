import mongoose from "mongoose";

const Schema = mongoose.Schema

const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const Chat = mongoose.model('Chat', chatSchema)
