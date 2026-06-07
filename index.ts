interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  dueDate?: Date;
}

let tasks: Task[] = [];

const TasksList: () => void = () => {
  console.log(tasks);
};

TasksList();
