
let todoitems = [];
let nextID = 1;



// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// The todo item should have the structure shown above
// It's really important that you have a unique ID for each todo item that you push onto the array
// the function does not need to return anything
function addToDoItem(text) {
  let todo = {
    id:nextID,
    text: text,
    completed: false,
  };
  todoitems.push(todo);
  nextID++;
  console.log(todoitems);
}

  // Implement the logic to add a task here

  


// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {
  // Implement the logic to add a task here
  for (let i = 0; 1 < todoitems.length; i++){
    if(todoitems[i].id === todoId){
      todoitems.splice(i,1);
      break;
    }
  }

  
}

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  const itemIndex = todoitems.findindex((todo)=> todo.id === todoId);

  if (itemIndex !== -1) {
    todoitems[itemIndex].completed = true;
  }
}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
const itemIndex = todoitems.findindex(todo => todo.id === todoId);
  if( itemIndex != -1){
    todoitems.splice(itemIndex,1);
  }
} 

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
 todoitems = todoitems.filter(todo => !todo.completed);
 
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed
