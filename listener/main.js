const express = require("express")
const listenTask = require("./task_listener/listenTask")

const app = express()
const port = process.env.PORT | 4000

app.use(express.json())
app.use(listenTask)

app.listen(port, () => {
    console.log(`Server is listening ${port}`)
})