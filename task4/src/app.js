require('dotenv').config()
const express= require('express');
const hbs=require('hbs');
const path=require('path')
const route=require('../route/use.route')
const app=express();


app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'../design/views'))
hbs.registerPartials(path.join(__dirname,'../design/layouts'))

app.use(express.urlencoded())
app.use(route)
module.exports=app

