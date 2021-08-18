const fs = require('fs')
let data = []
const readJsonFile = ()=>{
    try{
    data = JSON.parse(fs.readFileSync('src/model/data.json').toString())
    if(!Array.isArray(data)) throw new Error()
    }
    catch(e){ data = [] 
    console.log(data)}
}
const saveJsonFile = () =>{
    fs.writeFileSync('src/model/data.json', JSON.stringify(data))
}
class user{
    addNewUser(name, balance, age){
        readJsonFile()
        let newUser = {
            _id:new Date().getTime(),
            name,balance, age
        }
        data.push(newUser)
        saveJsonFile()
    }

    editUser(userId, newData){
        readJsonFile()
        let index = data.findIndex(user=> user._id == userId)
        newData._id = data[index]._id
        data[index] = newData
        saveJsonFile()
    }
    showAllUsers(){
        readJsonFile()
        return data
    }
    searchUser(userId){
        readJsonFile()
        let index = data.findIndex(user=> user._id == userId)
        return data[index]
    }
    deleteUser(userId){
        readJsonFile()
        let index = data.findIndex(user=> user._id === userId)
        data.splice(index, 1)
        saveJsonFile()
    }
    Withdrawal(userId, Withdrawal){
        readJsonFile()
        let index = data.findIndex(user=> user._id == userId)
        if(Withdrawal<=5000 && Withdrawal<data[index].balance ) {
            data[index].balance=data[index].balance-Withdrawal     
        }
        else{
            console.log("cant Withdrawal")
        }
        
        saveJsonFile()
    }
    deposit(userId, deposit){
        readJsonFile()
        let index = data.findIndex(user=> user._id == userId)
        
        if(deposit<=10000 ) {
            data[index].balance= Number(deposit)+Number(data[index].balance) 
           
        }
        else{
            console.log("cant deposit")
        }
        saveJsonFile()
    }
    

}
const x=new user()
module.exports=x