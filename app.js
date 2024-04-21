import express from 'express'
import { Chat } from './models/chatSchema.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
mongoose.connect('mongodb+srv://victor_west:belemauniben123@cluster0.vr6umex.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("connected to mongoDB"))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/', (req, res) => {
    Chat.find()
        .then(response => res.send(response))
        .catch(err => console.log(err))
})
app.post('/new-chat', (req, res) => {
    const {data, name, photoURL} = req.body
    const chat = new Chat({
        name: name,
        photoURL: photoURL,
        message: data
    })
    chat.save()
        .then(response => res.send(response))
        .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})