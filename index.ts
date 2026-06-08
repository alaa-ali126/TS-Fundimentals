interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  dueDate?: Date;
}

let tasks: Task[] = [];
let id = 0;

const TasksList: () => void = () => {
  console.log(tasks);
};

const addTask: (title: string) => void = (title) => {
  const task: Task = {
    id: id,
    title: title,
    isCompleted: false,
  };
  id += 1;
  tasks.push(task);
};

const isCompleted: (id: number) => void = (id) => {
  tasks = tasks.map((task) => {
    return task.id === id ? { ...task, isCompleted: true } : { ...task };
  });
};

TasksList();
addTask("hello");
addTask("hello");
TasksList();
addTask("hello");
addTask("hello");
addTask("hello");
isCompleted(1)
isCompleted(3)
TasksList();
