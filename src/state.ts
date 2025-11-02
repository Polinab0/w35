
import type { Todo } from "./interfaces";

export let todos: Todo[] = [];
export type FilterStatus = "all" | "completed" | "active";
export let filterStatus: FilterStatus = "all";

export const setFilterStatus = (status: FilterStatus): void => {
    filterStatus = status;
}
export const getFilterTodos = (): Todo[] => {
    if (filterStatus === "active") 
        return todos.filter(todo =>!todo.completed);
    if (filterStatus === "completed") 
        return todos.filter(todo => todo.completed);
    return todos;
}


// Step 5: Function to add a new todo
// Function to add a new todo: This function creates a new todo object and adds it to the array.
export const addTodo = (text: string, dueDate: string | null ): void => {
    const isCompleted = todos.length % 2 === 0? true : false; // Randomly set completed status for testing filter
    const newTodo: Todo = {
        id: Date.now(), // Generate a unique ID based on the current timestamp
        text: text,
        completed: isCompleted,
        dueDate, 
    };
    todos.push(newTodo);
    console.log("Todo added: ", todos); // Log the updated list of todos to the console
};

// Step 8: Function to remove a todo by ID
// Function to remove a todo by ID: This function removes a todo from the array based on its ID.
export const removeTodo = (id: number): void => {
    todos = todos.filter((todo) => todo.id !== id);
};

// Edit function - prompt user to edit the todo : editTodo
export const editTodo = (id: number, newText: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.text = newText;
    }
};

JSON.stringify(todos); // '[{todo1}, {todo2}]'