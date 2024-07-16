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
    //will implement random employees creation later
    Employee.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})