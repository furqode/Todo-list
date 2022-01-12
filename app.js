
// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(Event) {
    // Prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todolist.appendChild(todoDiv);
}