// import './style.css'
// //import { setupCounter } from './counter.ts'


// interface Todo {
//   id: number
//   text: string
//   completed: boolean
// }

// let todos: Todo[] = [];

// const todoInput = document.getElementById ('todo-input') as HTMLInputElement;
// const todoForm = document.querySelector ('.todo-form') as HTMLFormElement;
// const todoList = document.querySelector('.todo-list') as HTMLUListElement;

// const addTodo = (text:string) => {
//   const newTodo: Todo = {
//     id:Date.now(),
//     text:text,
//     completed: false
//   }
//   todos.push(newTodo);
//   console.log("check to see if push works: ", todos);
//   renderTodos();
// }

// todoForm.addEventListener('submit', (event:Event) => {
//   event.preventDefault(); 
//   const text = todoInput.value.trim()
//   if (text != '') {
//     addTodo(text);  
//     todoInput.value = '';
//   }
//   })

//   const renderTodos = () => {
//     todoList.innerHTML = ''; // clear the last first

//     todos.forEach((todo) => {
//       const li = document.createElement('li'); 
//       li.className = 'todo-item';
//       li.innerHTML = `<span>${todo.text}</span>
//       <button>Remove</button>`

//        addRemoveButtonListener(li, todo.id);
//       todoList.appendChild(li)
//     })
//   }
//   renderTodos();

//   const addRemoveButtonListener = (li: HTMLLIElement, id: number ) => {
//     const removeButton = li.querySelector('button') as HTMLButtonElement;
//     removeButton?.addEventListener('click', () => {
//       removeTodo(id);
//     });
//   }

//   const removeTodo = (id: number) => {
//     todos = todos.filter(todo => todo.id !== id )
//     renderTodos();

  
//   }


//   // Function to change the background color of the page based on the color picker value
// const changeBackgroundColor = (color: string): void => {
//   document.body.style.backgroundColor = color;
// };

// // Function to initialize the color picker event listener
// const initializeColorPicker = (): void => {
//   const colorPicker = document.getElementById('colorPicker') as HTMLInputElement; // encapsulate the color picker element to this function
//   if (colorPicker) {
//     colorPicker.addEventListener('input', (event: Event) => {
//       const target = event.target as HTMLInputElement;
//       changeBackgroundColor(target.value);
//     });
//   } else {
//     console.error('Color picker element not found');
//   }
// };

// // Call the initializeColorPicker function when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//   initializeColorPicker();
// });




// 1 Import the CSS file: This ensures that the styles are applied to the HTML elements.
// src/main.ts


import "./style.css";


import {
    addTodo,
    removeTodo,
    editTodo,
    todos,
    setFilterStatus,
    getFilterTodos,
    filterStatus,
    type FilterStatus,
    toggleTodoCompleted,
} from "./state";


import {
    todoForm,
    todoInput,
    renderTodos,
    showInputError,
    clearInputs,
    clearInputError,
    promptForEditText,
    initializeColorPicker,
   updateFilterButtons ,
    filterAll,
    filterActive,
    filterCompleted,
    dateInput,
} from "./ui";


const handleRemove = (id: number): void => {
    removeTodo(id);
    updateUI();
};


const handleEdit = (id: number): void => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    const newText = promptForEditText(todo.text);
    if (newText !== null && newText.trim() !== "") {
        editTodo(id, newText.trim());
        updateUI();
    }
};


const handleToggle = (id: number): void => {
    toggleTodoCompleted(id); 
    updateUI();             
};


const updateUI = (): void => {
    const filteredTodos = getFilterTodos();
 
    renderTodos(filteredTodos, handleRemove, handleEdit, handleToggle);
    updateFilterButtons(filterStatus);
};


const handleSubmit = (event: Event): void => {
    event.preventDefault();
    const text = todoInput.value.trim();
    const dueDatec = dateInput.value || null;

    if (text !== "") {
        clearInputError();
        addTodo(text, dueDatec);
        clearInputs();
        updateUI();
    } else {
        showInputError();
    }
};


const handleFilter = (status: FilterStatus): void => {
    setFilterStatus(status);
    updateUI();
};


todoForm.addEventListener("submit", handleSubmit);

filterAll.addEventListener("click", () => handleFilter("all"));
filterActive.addEventListener("click", () => handleFilter("active"));
filterCompleted.addEventListener("click", () => handleFilter("completed"));


document.addEventListener("DOMContentLoaded", () => {
    initializeColorPicker();
    updateUI();
});


/**
 * Kristian: 6th of September 2024, BDE
 *
 * This is the list of optional features that can be added to the todo list application:
 * You must make at least one of these features to complete the project. The more the merrier.
 * In your submission video, please mention which feature you have implemented and demonstrate how it works. Go through the code and explain how you implemented the feature and how it works.
 * IF, you want to implement something not on list, you can do that as well.
 */

//Optional features list:

//! Option 1: Add a button to toggle the completed status of a todo item
// Function to toggle the completed status of a todo +
// Add a button to toggle the completed status of a todo item

// Option 2: Add a button to clear all completed todos
// Add a button to clear all completed todos
// Function to clear all completed todos

// Add a button to toggle all todos

// Option 3: Add a button to toggle all todos
// Edit a todo item and update it
// Add an input field to edit a todo item
// Save the updated todo item
// Cancel the editing of a todo item
// Add a button to cancel the editing of a todo item

//! Option 4: Add a button to filter todos by status
// Add a button to filter todos by status
// Function to filter todos by status

// Option 5: Add a button to sort todos by status
// Add a button to sort todos by status
// Function to sort todos by status

//! Option 6: Due Date for Todos:
// Add a date input field to set a due date for each todo item.
// Display the due date next to each todo item.
// Highlight overdue todos.
// Priority Levels:

// Option 7: Add a dropdown to set the priority level (e.g., Low, Medium, High) for each todo item.
// Display the priority level next to each todo item.
// Sort todos by priority.
// Search Functionality:

// Option 8: Add a search input field to filter todos based on the search query.
// Display only the todos that match the search query.
// Category Tags:

// Option 9: Add a text input field to assign category tags to each todo item.
// Display the tags next to each todo item.
// Filter todos by category tags.
// Progress Indicator:

// Option 10: Add a progress bar to show the percentage of completed todos.
// Update the progress bar as todos are marked as completed or incomplete.
// Dark Mode Toggle:

// Option 11: Add a button to toggle between light and dark modes.
// Change the app's theme based on the selected mode.
// Export/Import Todos:

// Option 12: Add buttons to export the list of todos to a JSON file.
// Add functionality to import todos from a JSON file.
// Notifications:

// Option 13: Add notifications to remind users of due todos.
// Use the Notification API to show browser notifications.

// Option 14: Local Storage:
// Save the list of todos to local storage.
// Retrieve the todos from local storage on page load.
// Add a button to clear all todos from local storage.

// Option 15: JSDOC Comments:
// Add JSDoc comments to document the functions and interfaces in the code.
// Link : https://jsdoc.app/

// Optional 16: Handle Errors:
// Add error handling for user input validation. Show red text or border for invalid input.
// Display error messages for invalid input.

