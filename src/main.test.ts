// import { describe, it, expect } from 'vitest'; 

// interface Todo {
//     id: number;
//     text: string;
//     completed: boolean;
// }

// const addTodo = (todo: Todo [] , text:string) => {
//     const newTodo: Todo = {
//         id: 123,
//         text, 
//         completed: false
//     }
//     return [ ...todo, newTodo]; // spread operator
// }

// const removeTodo = (todos: Todo [], id: number) => {
//     return todos.filter(todo => todo.id !== id)
// }

// describe('addTodo', () => {
//     it('should add a new todo to the list', () => {
//         const todos : Todo[] = [] ;
//         const result = addTodo(todos, 'Test todo');
//         expect(result.length). toBe(1);
//         expect(result[0].id).toBe(123);
//         expect(result[0].completed).toBe(false);
//     })
// }) 

// describe ('removeTodo', () => {
//     it('should remove a todo', () => {
//         const todos : Todo [] = [
//             { id: 123, text: 'Test todo 1', completed: false },
//             { id: 456, text: 'Test todo 2', completed: true }
//         ]
//         const result = removeTodo(todos,123); 
//         expect(result.length).toBe(1);
//         expect(result[0].id).toBe(456);
// })
//     it('should do nothing if the id is not found ', () => {
//         const todos : Todo [] = [
//             { id: 123, text: 'Test todo 1', completed: false },
//             { id: 456, text: 'Test todo 2', completed: false }
//         ]
//         const result = removeTodo(todos, 999); 
//         expect(result.length).toBe(2);
//         expect(result[0].id).toBe(123); 
//      })

// })



import { describe, it, expect, beforeEach } from 'vitest';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];

describe('Todo App', () => {
  beforeEach(() => {
    todos = [];
  });

  it('should add a new todo', () => {
    const newTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    todos.push(newTodo);
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual(newTodo);
  });

  it('should mark a todo as completed', () => {
    const newTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    todos.push(newTodo);
    todos[0].completed = true;
    expect(todos[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const newTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    todos.push(newTodo);
    todos = todos.filter(todo => todo.id !== newTodo.id);
    expect(todos.length).toBe(0);
  });
});