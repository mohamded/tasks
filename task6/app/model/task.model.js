const mongoose=require('mongoose')
const validator=require('validator')


const task=mongoose.model('task',{
    title:{
        type:String,
        required : true,
        minlength : 3,
        maxlength:20,
        trim:true

},
    content:{
        type:String,
        required : true,
        minlength : 3,
        maxlength:350,
        trim:true
    },
    dueDate:{
        type:Date,
        validate(value){
            if(value<new Date()) throw new Error('error data')
    }
}})
module.exports=task