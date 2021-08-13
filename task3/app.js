const yargs=require('yargs');
const x=require('./index');
yargs.command({
    command:"addcus",
    describe:"add and delete task",
    builder:{
        name:{
            demandOption: true,
            type:"string"
        },
        balance:{
            demandOption: true,
            type:"number"
        }
    },
    handler: 
        function(argv){
          x.addcus(argv)
        
    }
})
yargs.command({
    command:"show",
    describe:"add new task",
    handler:function(){ x.show()}
})
yargs.command({
    command:"search",
    describe:"add and delete task",
    builder:{
        title:{
           
            type:"string"
        },
        content:{
            
            type:"string"
        },
        id:{
            
            type:"number"
        }
    },
    handler: 
        function(argv){
          x.search(argv)
        
    }
})
yargs.command({
    command:"delete",
    describe:"add and delete task",
    builder:{
       
        
        accountNum:{
            demandOption:true,
            type:"number"
        }
    },
    handler: 
        function(argv){
          x.delete(argv)
        
    }
})
yargs.command({
    command:"Withdrawal",
    describe:"add and delete task",
    builder:{
       
        
        accountNum:{
            demandOption:true,
            type:"number"
        },
        Withdrawal:{
            demandOption:true,
            type:"number"
        }

    },
    handler: 
        function(argv){
          x.Withdrawal(argv)
        
    }
})
yargs.command({
    command:"deposit",
    describe:"add and delete task",
    builder:{
       
        
        accountNum:{
            demandOption:true,
            type:"number"
        },
        deposit:{
            demandOption:true,
            type:"number"
        }

    },
    handler: 
        function(argv){
          x.deposit(argv)
        
    }
})
yargs.argv;

