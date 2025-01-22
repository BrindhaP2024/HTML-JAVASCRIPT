// DOM Elements
const addTodoButton = document.getElementById('add-todo-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new Todo item
function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    // Create a span for the todo text
    const todoContent = document.createElement('span');
    todoContent.textContent = todoText;

    // Create the Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTodoItem(todoItem, todoContent));

    // Create the Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodoItem(todoItem));

    // Append content and buttons to the todo item
    todoItem.appendChild(todoContent);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    // Add todo item to the list
    todoList.appendChild(todoItem);
}

// Function to edit a Todo item
function editTodoItem(todoItem, todoContent) {
    const newText = prompt('Edit your todo item:', todoContent.textContent);
    if (newText !== null && newText !== '') {
        todoContent.textContent = newText;
    }
}

// Function to delete a Todo item
function deleteTodoItem(todoItem) {
    todoItem.remove();
}

// Event listener to add a new Todo item
addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        createTodoItem(todoText);
        todoInput.value = ''; // Clear the input
    }
});

// Optional: Press "Enter" to add a Todo item
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodoButton.click();
    }
});
