require('dotenv').config
const express=require('express');
const app=express()
app.use(express.json())

require('../app/db/connection')
const route=require('../route/task.route')
app.use(route)
module.exports=app