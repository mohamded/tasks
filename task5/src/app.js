require('dotenv').config()
const express=require('express')
const hbs=require('hbs')
const path=require('path')
const router=require('../router/router.task')

const app=express()


const layouts=path.join(__dirname,'../design/layouts')
const views=path.join(__dirname,'../design/views')


app.set('view engine','hbs')
app.set('views',views)

hbs.registerPartials(layouts)

app.use(express.urlencoded())
app.use(router)
module.exports=app
