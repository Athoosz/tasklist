import { Scroll } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TaskCard } from "../TaskCard";
import { ITask } from "../..";

interface TaskListBodyProps {
  taskListFake: ITask[];
  handleFinishTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export const TaskListBody: React.FC<TaskListBodyProps> = ({
  handleFinishTask,
  taskListFake,
  handleRemoveTask,
}) => {
  return taskListFake.length == 0 ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <Scroll color="#2563eb" size={48} />
      <Text style={{ fontFamily: "Inter500", width: 150, textAlign: "center" }}>
        Sua lista de tarefas está vazia
      </Text>
    </View>
  ) : (
    <ScrollView>
      {taskListFake.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          isDone={task.isDone}
          title={task.title}
          createdAt={task.createdAt}
          handleFinishTask={handleFinishTask}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </ScrollView>
  );
};
