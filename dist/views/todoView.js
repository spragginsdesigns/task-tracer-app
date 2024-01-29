export class TodoView {
    render(todos) {
        const listElement = document.getElementById('todoList');
        if (listElement) {
            listElement.innerHTML = ''; // Clear existing items
            todos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.innerText = todo.text;
                // Add more logic here for marking as complete, deleting, etc.
                listElement.appendChild(todoItem);
            });
        }
    }
}
