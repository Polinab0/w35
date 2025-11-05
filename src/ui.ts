
import type { Todo } from "./interfaces";
import type { FilterStatus } from "./state";


export const todoInput = document.getElementById("todo-input") as HTMLInputElement;
export const todoForm = document.querySelector(".todo-form") as HTMLFormElement;
export const todoList = document.getElementById("todo-list") as HTMLUListElement;
export const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;
export const dateInput = document.getElementById("date-input") as HTMLInputElement;

export const filterAll = document.getElementById("filter-all") as HTMLButtonElement;
export const filterActive = document.getElementById("filter-active") as HTMLButtonElement;
export const filterCompleted = document.getElementById("filter-completed") as HTMLButtonElement;


const isOverdue = (todo: Todo): boolean => {
    if (!todo.dueDate || todo.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(todo.dueDate);
    return dueDate < today;
};


export const renderTodos = (
    todosTorender: Todo[],
    onRemove: (id: number) => void,
    onEdit: (id: number) => void,
    onToggle: (id: number) => void
): void => {
    todoList.innerHTML = "";

    todosTorender.forEach((todo) => {
        const overdue = isOverdue(todo);

        const li = document.createElement("li");
        li.className = `todo-item ${overdue ? "overdue" : "-"}`;

        li.innerHTML = `
            <input type="checkbox" class="toggle-checkbox" ${
                todo.completed ? "checked" : ""
            } />
            <span class="${todo.completed ? "completed-text" : ""}">${todo.text}</span>
            ${
                todo.dueDate
                    ? `<span class="todo-date">Due: ${todo.dueDate}</span>`
                    : "-"
            }
            <button class="remove-btn">Remove</button>
            <button id="editBtn" class="edit-btn">Edit</button>
        `;

  
        addToggleButtonListener(li, todo.id, onToggle);
        addRemoveButtonListener(li, todo.id, onRemove);
        addEditButtonListener(li, todo.id, onEdit);

        todoList.appendChild(li);
    });
};


export const addRemoveButtonListener = (
    li: HTMLLIElement,
    id: number,
    callback: (id: number) => void
): void => {
   
    const removeButton = li.querySelector(".remove-btn");
    removeButton?.addEventListener("click", () => callback(id));
};


const addToggleButtonListener = (
    li: HTMLLIElement,
    id: number,
    callback: (id: number) => void
): void => {
    const toggleInput = li.querySelector("input") as HTMLInputElement | null;
    if (!toggleInput) return;

    toggleInput.addEventListener("change", () => {
        callback(id); 
    });
};


const addEditButtonListener = (
    li: HTMLLIElement,
    id: number,
    callback: (id: number) => void
): void => {
    const editButton = li.querySelector("#editBtn");
    editButton?.addEventListener("click", () => callback(id));
};


export const updateFilterButtons = (currentFilter: FilterStatus): void => {
    filterAll.classList.toggle("active", currentFilter === "all");
    filterActive.classList.toggle("active", currentFilter === "active");
    filterCompleted.classList.toggle("active", currentFilter === "completed");
};

export const showInputError = (): void => {
    todoInput.classList.add("input-error");
    errorMessage.style.display = "block";
};
export const clearInputError = (): void => {
    todoInput.classList.remove("input-error");
    errorMessage.style.display = "none";
};

export const clearInputs = (): void => {
    todoInput.value = "";
    dateInput.value = "";
};


export const promptForEditText = (currentText: string): string | null => {
    return prompt("Edit todo", currentText);
};


const changeBackgroundColor = (color: string): void => {
    document.body.style.background = color;
};

export const initializeColorPicker = (): void => {
    const colorPicker = document.getElementById("colorPicker") as HTMLInputElement;
    if (colorPicker) {
        colorPicker.addEventListener("input", (event: Event) => {
            const target = event.target as HTMLInputElement;
            changeBackgroundColor(target.value);
        });
    }
};
