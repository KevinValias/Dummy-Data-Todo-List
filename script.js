// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let elementColor = ""
let arrayOfTodos = []
let x = ""
let arraryOfTodos = [
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
  
  let list = () =>{
    document.getElementById()
  }

  // const fetchTodos = () => {
  // const userNum = (num) => {
  //   x = parseInt (num)
  //   console.log(num)
  // }
  // }
  const fetchTodos = () => { 
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    .then( (json) => arraryOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
    console.log(arraryOfTodos)
  }

  const populateAllTodos = () =>{
    populateTodos(arraryOfTodos)
  }

  const populateTodos = () => {
  const populateTodos = (arr) => {

     let list = document.getElementById("todo-list")


     for (let i=0; i < arrayOfTodos.length; i++){
     for (let i=0; i < arr.length; i++){
      let newLi = document.createElement('LI')
      let newH1 = document.createElement('H1')
      let newH2 = document.createElement('H2')
      let newH3 = document.createElement('H3')
      let newH4 = document.createElement('H4')

     let userID = document.createTextNode(arrayOfTodos[i].userId)
     let userID = document.createTextNode(arr[i].userId)
     newH1.appendChild(userID)

     let id = document.createTextNode(arrayOfTodos[i].id)
     let id = document.createTextNode(arr[i].id)
     newH2.appendChild(id)

     let title = document.createTextNode(arrayOfTodos[i].title)
     let title = document.createTextNode(arr[i].title)
     newH3.appendChild(title)

     let complete = document.createTextNode(arrayOfTodos[i].completed)
     let complete = document.createTextNode(arr[i].completed)
     newH4.appendChild(complete)

     newLi.appendChild(newH1)
     newLi.appendChild(newH2)
     newLi.appendChild(newH3)
     newLi.appendChild(newH4)
     list.appendChild(newLi)
     

     console.log(elementColor)

     if(arrayOfTodos[i].completed === true){
     if(arr[i].completed === true){
       elementColor = "green"
     } else {
      elementColor = "red"
     }
     newLi.style.color = elementColor
  }
  }

  const filterTodosByUserId = () => {



   let arraryOfUserTodos = arraryOfTodos.filter(function(numID) {
    return numID.userId === x
  })
  {
  populateTodos(arraryOfUserTodos)

  console.log(arraryOfUserTodos)

   }

  const filterTodosByComplete = () => {



  let arraryOfCompleted = arraryOfTodos.filter(function(todo){
    return todo.completed === true
  })
{
  populateTodos(arraryOfCompleted)


}

const filterTodosByNotComplete = () => {

  let arraryOfNotCompleted = arraryOfTodos.filter(function(todo){
  return todo.completed === false
})
{
populateTodos(arraryOfNotCompleted)


}

  const resetTodos = () => {

  const arraryOfTodos = document.getElementsByTagName("OL")
  for (i=0; i < arraryOfTodos.length; i++)
  
  arraryOfTodos[i].innerHTML = null
  {
  console.log(arraryOfTodos)
}


  
  // you need to be able to remove todos
  // Add an input to take in a number from 1 - 10
  // html lines 15 & 16 
  // Add a button that when clicked will:
  
  // clear the previous todos
  
  // and populate it with only todos with the userID that matches the number inputted.
  
  // stores the currently filtered todos in a variable
  
  // So that you can create two more buttons that when clicked:
  
  // removes those todos
  
  // and shows only todos that are either:
  
  // completed
  
  // not completed
 
 
 
 
  