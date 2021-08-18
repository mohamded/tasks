const task=require('../model/task.model')

const addTask=async(req,res)=>{
    const insert=new task(req.body)
try{
        await insert.save()
        res.status(200).send({
            apistatus:true,
            data:insert,
            msg:"api true"
        })
}
catch(e){
    res.status(500).send({
        apistatus:false,
            data:e,
            msg:"api false"
    })
            
}
}
const showAll=async(req,res)=>{
    
    try{
        const tasks=await task.find()
        if(!tasks) res.status(404).send({
            apistatus:false,
            data:"erroe ",

        })
        res.status(200).send({
            apistatus:true,
            data:tasks,
            msg:"api true"
        })
    }
    catch(e){
        res.status(500).send({
            apistatus:false,
                data:e,
                msg:"api false"
        })
    }
}

const deleteTask=async(req,res)=>{
    id =req.params.id
    try{
        const data=await task.findByIdAndDelete(id)
        if(!data)res.status(404).send({
            apistatus:false,
            data:"error ",

        })
        res.status(200).send({
            apistatus:true,
            data:data,
            msg:"api true"
        })

    }
    catch(e){
        res.status(500).send({
            apistatus:false,
                data:e,
                msg:"api false"
    })
}}

const edittask = async(req,res)=>{
    try{
        id = req.params.id
        allowed = ['dueDate']
        requested = Object.keys(req.body)
        const isValidUpdates = requested.every(r=> allowed.includes(r))
        if(!isValidUpdates) return res.status(500).send({
            apiStatus:false,
            data:null,
            message:"invalid requested"
        })
        const task1 = await task.findByIdAndUpdate(id, req.body, {})
        if(!task1) return res.status(404).send({apiStatus:false, data:null, message:"user not found"})
        res.status(200).send({
            apiStatus:true,
            data:task1,
            message:"updated"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e,
            message: "error in edit"
        })
    }

}
module.exports={
    addTask,showAll,deleteTask,edittask
}