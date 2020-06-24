// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (mikey) => mikey.json())
    .then( (goof) => arrayOfTodos = goof)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    let unicorn = document.getElementById("todo-list") 
    
    let poop = document.createElement('LI')
   
    let fork = document.createTextNode(arrayOfTodos[0].title)
    
    poop.appendChild(fork)
   
    unicorn.appendChild(poop)

  }