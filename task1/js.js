const addForm = document.querySelector('#addForm')
customerHeads = ['name', 'address', 'accNum', 'balance']
let num=0;
const show =document.querySelector('.show')
users = []

addForm.addEventListener('submit', function(e){
    let noErr =true
    let user = {};
    e.preventDefault();
    
    customerHeads.forEach(cHead => {
        user[cHead] = this.elements[cHead].value
      
    });
    users.push(user)
    console.log(users)
    const v= document.createElement('div');
    
    customerHeads.forEach(h=>{
        const x= document.createElement('div');
        x.innerText=`${h} is ${user[h]}`;
        v.appendChild(x)
        
    })
    const y= document.createElement('button');
    v.appendChild(y)
    show.appendChild(v)
    y.innerText="delete";
    y.setAttribute("id",num=num+1)
    y.setAttribute("class",'x')
    y.addEventListener('click',function(e){
        
        document.getElementById(e.target.id).parentElement.style.display='none'
    })})