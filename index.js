const express = require("express")
const app = express()
const cors = require("cors")


require('dotenv').config()

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')


app.use("/api/v1/posts", postsRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})