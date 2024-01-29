import { Todo } from "./models/todo";
import { TodoView } from "./views/todoView";
class TaskTracer {
    constructor() {
        this.todos = [];
        this.todoView = new TodoView();
        this.attachEventListeners();
    }
    attachEventListeners() {
        const addButton = document.getElementById('addButton');
        if (addButton) {
            addButton.addEventListener('click', () => this.addTodo());
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
