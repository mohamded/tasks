const express=require('express')
const router = express.Router()
const myConnection=require('../src/controller/dbconnection')
const{ObjectId}=require('mongodb')
const { response } = require('express')
router.get('',(req,res)=>{
    res.redirect('/showAll')
})
router.get("/add",(req,res)=>{
    res.render('add')
})
router.post("/add",(req,res)=>{
    data=req.body
    console.log(data)
    myConnection((error,response)=>{
        if(error) res.send("database error")
        response.collection('tasks').insertOne(data,(e , d)=>{
            if(e) res.send(e)
            res.redirect('/showAll')
        })
    })
})
router.get('/showAll',(req,res)=>{
    
    myConnection((error,response)=>{
        if(error) res.send('database error')
        response.collection('tasks').find().toArray((e,d)=>{
            if(e) res.send(e)
            res.render('all',{allusers:d,isEmpty:d.length?false:true})
        })
    })
})
router.get('/single/:id',(req,res)=>{
    id=req.params.id
    
    myConnection((error,response)=>{
        if(error) res.send("database error")
        response.collection('tasks').findOne({_id:new ObjectId(id)},(e,d)=>{
            if(e) res.send(e)
            res.render('single',{allusers:d,isEmpty:d.length?false:true})
        })
    })
})
router.get('/delete/:id',(req,res)=>{
    id=req.params.id
    myConnection((error,response)=>{
        if(error) res.send("database error")
        response.collection('tasks').deleteOne({_id:new ObjectId(id)},(e,d)=>{
            if(e) res.send(e)
            res.redirect('/showAll')
        })
      
    })

})


router.get('/edit/:id', (req,res)=>{
    id = req.params.id
    myConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').findOne({_id: new ObjectId(id)}, ((e,  d)=>{
            if(e) res.send(e)
            res.render('edit', {
                title:"all Data",
                user: d
             })
            }))
        })        

})
router.post('/edit/:id', (req,res)=>{
    id=req.params.id
    data = req.body
    myConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').updateOne(
            {_id:new ObjectId(id)},
             { $set:data} ,
             (e,d)=>{
                 if(e) res.send(e)
                 res.redirect('/showAll')
             }
    
    )
   

    })

})

module.exports = router