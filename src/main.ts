import './style.css'
//import { setupCounter } from './counter.ts'

interface Todo {
  id: number
  text: string
  completed: boolean
}

let todos: Todo[] = [];

const todoInput = document.getElementById ('todo-input') as HTMLInputElement;
const todoForm = document.querySelector ('.todo-form') as HTMLFormElement;
const todoList = document.querySelector('.todo-list') as HTMLUListElement;

const addTodo = (text:string) => {
  const newTodo: Todo = {
    id:Date.now(),
    text:text,
    completed: false
  }
  todos.push(newTodo);
  console.log("check to see if push works: ", todos);
  renderTodos();
}

todoForm.addEventListener('submit', (event:Event) => {
  event.preventDefault(); 
  const text = todoInput.value.trim()
  if (text != '') {
    addTodo(text);  
    todoInput.value = '';
  }
  })

  const renderTodos = () => {
    todoList.innerHTML = ''; // clear the last first

    todos.forEach((todo) => {
      const li = document.createElement('li'); 
      li.className = 'todo-item';
      li.innerHTML = `<span>${todo.text}</span>
      <button>Remove</button>`

       addRemoveButtonListener(li, todo.id);
      todoList.appendChild(li)
    })
  }
  renderTodos();

  const addRemoveButtonListener = (li: HTMLLIElement, id: number ) => {
    const removeButton = li.querySelector('button') as HTMLButtonElement;
    removeButton?.addEventListener('click', () => {
      removeTodo(id);
    });
  }

  const removeTodo = (id: number) => {
    todos = todos.filter(todo => todo.id !== id )
    renderTodos();

  
  }


  // Function to change the background color of the page based on the color picker value
const changeBackgroundColor = (color: string): void => {
  document.body.style.backgroundColor = color;
};

// Function to initialize the color picker event listener
const initializeColorPicker = (): void => {
  const colorPicker = document.getElementById('colorPicker') as HTMLInputElement; // encapsulate the color picker element to this function
  if (colorPicker) {
    colorPicker.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement;
      changeBackgroundColor(target.value);
    });
  } else {
    console.error('Color picker element not found');
  }
};

// Call the initializeColorPicker function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeColorPicker();
});