const fs = require('fs')
const express = require('express')
const request = require('request')

const app = express()


app.get('/', (req, res)=>{
    res.send('hello from node js ')
})

app.get('/restaturant',(req, response)=>{
    const url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees';

    request(url,{json:true},(err, res, body)=>{
      
        if (err){
            console.log('err in the url')
        }
        else if(res.body.err){
            console.log('err in the server')
        }
        else{
            const data=[]
            for(let i=0; i<body.length; i++){
                const employee = {
                    name:body[i].name,
                    createdAt:body[i].createdAt
                }
                data.push(employee)
            }
            response.send(data)
        }
    })

})
app.listen(3000, ()=>{
    console.log('running in port number 3000')
})