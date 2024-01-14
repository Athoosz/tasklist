import { Alert } from "react-native";
import { useState } from "react";

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
}

export function useTaskListViewModel() {
  const [taskListFake, setTaskListFake] = useState<ITask[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleAddTask = (title: string) => {
    if (title == "")
      return Alert.alert("Erro ao criar tarefa", "Informe o titulo da tarefa");

    const newTask: ITask = {
      id: taskListFake[taskListFake.length - 1]
        ? taskListFake[taskListFake.length - 1].id + 1
        : 1,
      title,
      isDone: false,
      createdAt: new Date(),
    };

    setTaskTitle("");
    setTaskListFake((olderTaskList) => [...olderTaskList, newTask]);
  };

  const handleRemoveTask = (id: number) => {
    setTaskListFake((olderTaskList) => {
      const filteredList = olderTaskList.filter((task) => task.id != id);
      return filteredList;
    });
  };

  const handleFinishTask = (id: number) => {
    const updatedTaskList = taskListFake.map((task) => {
      if (task.id !== id) return task;

      return {
        ...task,
        isDone: true,
      };
    });

    setTaskListFake(updatedTaskList);
  };

  return{
    taskListFake,
    taskTitle,
    handleFinishTask,
    handleRemoveTask,
    handleAddTask,
    setTaskTitle,
  }
}
