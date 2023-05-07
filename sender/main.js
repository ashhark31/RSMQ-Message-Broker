const express = require("express")
const task = require("./task_manager/task")

const app = express()
const port = process.env.PORT | 3000

app.use(express.json())
app.use(task)

app.listen(port, () => {
    console.log(`Server is listening ${port}`)
})

