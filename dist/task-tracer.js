import { Todo } from "./models/todo.js";
import { TodoView } from "./views/todoView.js";
class TaskTracer {
    constructor() {
        this.todos = [];
        this.todoView = new TodoView();
        this.attachEventListeners();
    }
    attachEventListeners() {
        const form = document.getElementById('task-form');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevents the page from refreshing
                this.addTodo();
            });
        }
    }
    addTodo() {
        const todoInput = document.getElementById('todoInput');
        if (todoInput && todoInput.value) {
            const newTodo = new Todo(Date.now(), todoInput.value);
            this.todos.push(newTodo);
            this.todoView.render(this.todos);
            todoInput.value = ''; // Clear the input field
        }
    }
}
new TaskTracer();
