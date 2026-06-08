"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tasks = [];
let id = 0;
const TasksList = () => {
    console.log(tasks);
};
const addTask = (title) => {
    const task = {
        id: id,
        title: title,
        isCompleted: false,
    };
    id += 1;
    tasks.push(task);
};
const isCompleted = (id) => {
    tasks = tasks.map((task) => {
        return task.id === id ? { ...task, isCompleted: true } : { ...task };
    });
};
addTask("hello");
addTask("hello");
addTask("hello");
addTask("hello");
addTask("hello");
TasksList();
isCompleted(1);
isCompleted(3);
TasksList();
//# sourceMappingURL=index.js.map