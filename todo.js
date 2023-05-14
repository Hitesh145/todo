const btn = document.querySelector("#addTaskBtn")


let todos = []

const ls=JSON.parse(localStorage.getItem("tasks"))

if (ls){
  todos=ls
  console.log(ls);
}



function addTask(e){
  const inp = document.querySelector("#myinput")
  todos.push(inp.value)
  render()
}

function render(){
  const ul = document.querySelector("ul")
  ul.innerHTML = "";
  for(const i in todos){
    const todo = todos[i]
    const li = document.createElement('li')
    const txt = document.createElement('div')
    const cross = document.createElement('div')
    txt.innerText = todo
    cross.innerText = 'X'
    cross.className = "cross"
    
    cross.addEventListener('click',() =>{
      todos.splice(i,1)
      render()
    })
    
    li.appendChild(txt)
    li.appendChild(cross)
    ul.appendChild(li)
  }
  localStorage.setItem("tasks",JSON.stringify(todos))
}


btn.addEventListener('click',addTask)

render()