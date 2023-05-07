const request = require("request")

const updateTask = (tasks) => {
    request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/task/update",
        "body": JSON.stringify(tasks)
    }, (error,response,body)=>{
        if(error){
            return console.log(error)
        } 
        console.log(JSON.parse(body))
    })
}

module.exports = updateTask