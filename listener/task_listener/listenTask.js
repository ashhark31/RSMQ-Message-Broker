const express = require("express")
const request = require("request")
const updateTask = require("./updateTask")
const router = new express.Router()

router.get('/task/listener', (req,res) => {
    try{
        request.get({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/task/fetch"
        }, (error,response,body) => {
            if(error){
                return console.log(error)
            } 
            
            let tasks = JSON.parse(body)
            let current_time = []
        
        
            for(let i=0; i<tasks.length; i++){
                current_time.push(new Date().getSeconds())
                if(tasks[i].current_time !== current_time[i])
                    tasks[i].current_time = '60'
            }
        
            updateTask(tasks)
            res.status(201).send(tasks)
        })
    } catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})

module.exports = router