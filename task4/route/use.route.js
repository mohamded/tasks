const express=require('express')
const router= new express.Router()
const userController  = require('../src/controller/use.controller')


router.get('',(req,res)=>{
    res.redirect('/showAll')
})
router.get('/add', (req,res)=>{
    res.render('index')
})

router.post('/add', (req,res)=>{
    console.log(req.body)
    userController.addNewUser(req.body.name, req.body.balance, req.body.age)
    res.redirect('/showAll')
})

router.get('/showAll',(req,res)=>{
let allUser=userController.showAllUsers();
res.render('all',{allUser,title:"all data",
isEmpty:allUser.length?false:true
})
})
router.get('/delete/:id',(req,res)=>{
    userController.deleteUser(req.params.id)
    res.redirect('/showAll')
})
router.get('/edit/:id',(req,res)=>{
    let x=userController.searchUser(req.params.id)
    res.render('edit',{x})
})
router.post('/edit/:id',(req,res)=>{
    userController.editUser(req.params.id,req.body)
    res.redirect('/showAll')
})
router.get('/Withdrawal/:id',(req,res)=>{
    let user=userController.searchUser(req.params.id);
    res.render('withdr',{user})
})
router.post('/Withdrawal/:id',(req,res)=>{
    userController.Withdrawal(req.params.id,req.body.Withdrawal)
    res.redirect('/showALL')
})
router.get('/deposit/:id',(req,res)=>{
    let y=userController.searchUser(req.params.id);
    res.render('deposit',{y})
})
router.post('/deposit/:id',(req,res)=>{
    userController.deposit(req.params.id,req.body.deposit)
    res.redirect('/showALL')
})

module.exports=router