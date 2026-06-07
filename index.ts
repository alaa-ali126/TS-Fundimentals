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

TasksList();
