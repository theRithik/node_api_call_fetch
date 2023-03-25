const fs = require('fs')
const express = require('express');


const app = express()

app.get('/', (req, response)=>{
    const url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees';
    fetch(url,{method:'GET'})
    .then((req)=>req.json())
    .then((res)=>{response.send(res)
    console.log('successful')})
    .catch((err)=>{
        console.log(err)
    })
})
app.get('/employee/:id', (req, response)=>{
    const employee=[]
    const url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees';
    fetch(url,{method:'GET'})
    .then((req)=>req.json())
    .then((res)=>{
        for(let i=0; i<res.length; i++){
            if(req.params.id==res[i].id){
          employee.push(res[i])
            }
        }
        
        response.send(employee)
       
    console.log('successful')})
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log('in 3000')
})