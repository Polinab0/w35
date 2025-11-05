// src/state.ts
import type { Todo } from "./interfaces";

// state.ts
export let todos: Todo[] = [];

export type FilterStatus = "all" | "completed" | "active";
export let filterStatus: FilterStatus = "all";

export const setFilterStatus = (status: FilterStatus): void => {
  filterStatus = status;
};

export const getFilterTodos = (): Todo[] => {
  if (filterStatus === "active") {
    return todos.filter((todo) => !todo.completed);
  }
  if (filterStatus === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
};



export const addTodo = (text: string, dueDate: string | null): void => {
    const newTodo: Todo = {
        id: Date.now(),
        text: text,
        completed: false,     
        dueDate,
    };
    todos.push(newTodo);
    console.log("Todo added:", todos);
};


export const removeTodo = (id: number): void => {
    todos = todos.filter((todo) => todo.id !== id);
};


export const editTodo = (id: number, newText: string): void => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.text = newText;
    }
};


export const toggleTodoCompleted = (id: number): void => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
};


