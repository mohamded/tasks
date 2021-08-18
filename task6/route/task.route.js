const express=require('express')
const router=new express.Router();
const dbcontroller=require('../app/controller/task.controller')
router.post('/addTask',dbcontroller.addTask)
router.get('/allTasks',dbcontroller.showAll)
router.delete('/deleteTask/:id',dbcontroller.deleteTask)
router.patch('/editTask/:id',dbcontroller.edittask)


module.exports=router