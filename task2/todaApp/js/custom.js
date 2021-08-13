const showHidebtn = document.querySelector('#showHidebtn button')
const myForm = document.querySelector('#myForm')
const formData = document.querySelector('#myForm form')
const mainDataHeads = ['taskTitle', 'taskContent', 'taskType']
const tasksWrap = document.querySelector('#content-wrapper .row ')
const add=document.getElementById("add");
const taskTitle=document.getElementById('title');
const taskType=document.getElementById('type');
const taskContent=document.getElementById('content');
let tasks = []
let x=true
const getTasks = () =>{
    tasks = localStorage.getItem('tasks') || '[]'
    return JSON.parse(tasks)
}
const setTasks = (tasks) =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
showHideEvent = function(e){
    myForm.classList.toggle('d-none')
    if(e.target) this.innerText === "show form"?  this.innerText = "hide form" : this.innerText = "show form"
    else{ e.innerText="show form" }
}
addTask = function(e){

    if(x){
        e.preventDefault()
    task = { status:false, id : new Date().getTime()}
    mainDataHeads.forEach( head => task[head] = e.target.elements[head].value ); 
    tasks = getTasks()
    tasks.push(task)
    setTasks(tasks)
    e.target.reset()
    showHideEvent(showHidebtn)
    showSingle(task)
    }
}
editTask=function(task){
   showHideEvent(showHidebtn)
    add.innerText="edit Task"
    showHidebtn.innerText="hide form"
    i=tasks.findIndex(t=>t.id==task.id)
    let need=tasks[i]
    taskTitle.value=need.taskTitle
    taskType.value=need.taskType
    taskContent.value=need.taskContent
    x=false
    if(add.innerText=="edit Task"){
        add.onclick=function(){edit(task)};
    }

}
edit=(task)=>{
    i=tasks.findIndex(t=>t.id==task.id)
    let need=tasks[i]
    need.taskTitle=taskTitle.value
    need.taskType=taskType.value
    need.taskContent=taskContent.value 
    setTasks(tasks)
  
    showHideEvent(showHidebtn)
    
}

let createNewElement = (elementTag, elementTxt, elementClasses,parent, attributes) =>{
    myNewEl = document.createElement(elementTag)
    if(elementTxt!='') myNewEl.innerText = elementTxt
    if(elementClasses!="") myNewEl.className =elementClasses
    parent.appendChild(myNewEl)  
    attributes.forEach(attr=>{
            myNewEl.setAttribute(attr.attrName, attr.attrVal)
        })
        return myNewEl  
}
deleteTask =function(task){
    i = tasks.findIndex(t=> t.id == task.id)
    tasks.splice(i,1)
    setTasks(tasks)
    showTasks()
}
function showTasks (){
    tasks = getTasks()
    tasksWrap.innerText=""
    if(tasks.length==0) createNewElement('div', 'No Tasks To Show', 'alert alert-danger', tasksWrap, [])
    else tasks.forEach((task, i)=>{showSingle(task)})
}

function showSingle(task){
    col4Div = createNewElement('div', '', 'col-4 x', tasksWrap, [])
    contentDiv = createNewElement('div', '', 'm-3 border border-primary border-3 p-2 bg-danger text-white', col4Div, [])
    createNewElement('h3', task.taskTitle, '',contentDiv, [])
    createNewElement('p', task.taskContent, '',contentDiv, [])
    btndel = createNewElement('button', 'delete', 'btn btn-warning', contentDiv, []) 
    btnEdit = createNewElement('button', 'edit', 'btn btn-success', contentDiv, []) 
    btndel.addEventListener('click',function(e) {deleteTask(task)})
    btnEdit.addEventListener('click',function(e){editTask(task)})
}
showHidebtn.addEventListener('click', showHideEvent )
formData.addEventListener('submit', addTask)

showTasks()
