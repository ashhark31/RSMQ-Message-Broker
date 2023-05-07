const express = require("express")
const router = new express.Router()

let tasks = [
    {
        'name': 'task1',
        'description': 'task1 desc',
        'execution_time': `${new Date().getSeconds()}`
    }
]

router.post("/task/create", async(req,res) => {
    await tasks.push(req.body)
    try{
        res.status(201).send(tasks)
        console.log('create',tasks)
    } catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})

router.post("/task/update", async (req,res) => {
    tasks = await Object.keys(req.body).length ? Object(req.body) : tasks
    try{
        res.status(201).send(tasks)
        console.log('Update',tasks)
    } catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})

router.get("/task/fetch", (req,res) => {
    try{
        res.status(201).send(tasks)
    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router