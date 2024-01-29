"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoView_1 = require("./views/todoView");
var TaskTracer = /** @class */ (function () {
    function TaskTracer() {
        this.todos = [];
        this.todoView = new todoView_1.TodoView();
        // Initialization logic will go here
    }
    return TaskTracer;
}());
new TaskTracer();
//# sourceMappingURL=task-tracer.js.map