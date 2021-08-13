const fs=require('fs');
const { showHelpOnFail } = require('yargs');
class tasks{
  mydata=[]
  write(){
    
 fs.writeFileSync('all.json',JSON.stringify(this.mydata));

  }
  read(){
    try{
      this.mydata = JSON.parse(fs.readFileSync('all.json').toString())
      if(!Array.isArray(this.mydata)) throw new Error('')
  }
  catch(e){
      this.mydata=[]
  }
 
  }
  addcus=(data)=>{
    let inf={accountNum:new Date().getTime(),
    name:data.name,
    balance:data.balance,
    status:false
    }
this.read();
this.mydata.push(inf);
this.write();
  }
  show=()=>{
    this.read();
    this.mydata.forEach(task=>{
      console.log(task)
    })
  }
  search=(data)=>{
    let y=null;
    for( let x in data) if(x!="_"&&x!="$0") y=x
    
    this.read()
    
    let result=this.mydata.filter(task=>
      task[y]==data[y]
      
    )
    console.log(result)
  }

delete=(data)=>{
  this.read();
  let x=this.mydata.findIndex(task=>task["accountNum"]==data["accountNum"]);
  this.mydata.splice(x,1)
  this.write()
}
Withdrawal=(data)=>{
    this.read();
    let x=this.mydata.findIndex(cus=>cus.accountNum==data.accountNum)
    if(data["Withdrawal"]<=5000 && data["Withdrawal"]<this.mydata[x].balance && this.mydata[x].status==true) {
        this.mydata[x].balance=this.mydata[x].balance-data["Withdrawal"] 
        console.log(this.mydata[x].balance)
    }
    else{
        console.log("cant Withdrawal")
    }
    this.write()
}


deposit=(data)=>{
    this.read();
    let x=this.mydata.findIndex(cus=>cus.accountNum==data.accountNum)
    
    if(data["deposit"]<=10000  && this.mydata[x].status==true) {
        this.mydata[x].balance=this.mydata[x].balance+data["deposit"] 
        console.log(this.mydata[x].balance)
    }
    else{
        console.log("cant deposit")
    }
    this.write()
}

}

const myfunc=new tasks();
module.exports=
  myfunc
