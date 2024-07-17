const express = require('express')
const app = express()
const Employee  = require('./Models/employeeModel')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akashes5753279:luminar@cluster0.wkwwuy6.mongodb.net/company?retryWrites=true&w=majority&appName=Cluster0').then((result)=>{
    console.log('mongodb connection succesfull')
}).catch((err)=>{
    console.log(err)
})
// mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 8000
app.set('view engine','ejs')
app.get('/', (req, res) => {
    res.render('index',{foo:'FOO'})
})
app.get('/generate',async(req,res)=>{
    console.log('inside gen')
//clearing existing 10 employees
await Employee.deleteMany({})



    let randomNames=['akash','arun','athul','vinu','abhay']
    let randomCities=['kochi','cherthala','alappuzha','aluva','edappally']
    let randomLanguage=['malayalam','tamil','hindi','english','spanish']

    const getRandom=(arr)=>{
        let n = Math.floor(Math.random()*5)
        return arr[n]
    }

    for(let i=1;i<=10;i++){
        let newEmployee =await Employee.create({
            name:getRandom(randomNames),
        salary:Math.floor(Math.random()*25000),
        language:getRandom(randomLanguage),
        city:getRandom(randomCities),
        isManager:Math.random()>.5?true:false
        })
        console.log(newEmployee)
    

    }
    
 

    Employee.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})