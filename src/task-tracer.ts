import { Todo } from "./models/todo";
import { TodoView } from "./views/todoView";

class TaskTracer {
  private todos: Todo[] = [];
  private todoView: TodoView = new TodoView();

  constructor() {
    this.attachEventListeners();
  }

private attachEventListeners(): void {
  const form = document.getElementById('task-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents the page from refreshing
      this.addTodo();
    });
  }
}


  private addTodo(): void {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    if (todoInput && todoInput.value) {
      const newTodo = new Todo(Date.now(), todoInput.value);
      this.todos.push(newTodo);
      this.todoView.render(this.todos);
      todoInput.value = ''; // Clear the input field
    }
  }

  // Implement more methods for complete and delete
}

new TaskTracer();
