import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Scroll } from "lucide-react-native";
import { TaskCard } from "./components/TaskCard";
import { TaskListBody } from "./components/TaskListBody";
import { useTaskListViewModel } from "./view.model";

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
}

export const TaskListScreen: React.FC = () => {
  const {
    handleAddTask,
    handleFinishTask,
    handleRemoveTask,
    taskListFake,
    taskTitle,
    setTaskTitle,
  } = useTaskListViewModel();
  
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* TaskHeader */}
      <View style={styles.TaskListHeader}>
        <View style={styles.TaskListHeaderLeft}>
          <Text style={styles.title}>Lista de tarefas</Text>
          <Text style={styles.subtitle}>Lista de tarefas</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(taskTitle)}
        >
          <Text style={styles.buttonText}>Criar Tarefa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TaskListHeader}>
        <TextInput
          placeholder="Insira a task"
          placeholderTextColor="#555"
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
        />
      </View>

      {/* TaskListChips */}
      <View style={styles.TaskListChipsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.TaskListChips}
        >
          <TouchableOpacity style={styles.TaskListChip}>
            <Text style={styles.TaskListChipTextActive}>Todas</Text>
            <View style={styles.TaskListChipBadgeActive}>
              <Text style={styles.TaskListChipBadgeText}>
                {taskListFake.length}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.TaskListChip}>
            <Text style={styles.TaskListChipText}>Concluídas</Text>
            <View style={styles.TaskListChipBadge}>
              <Text style={styles.TaskListChipBadgeText}>
                {taskListFake.filter((task) => task.isDone === true).length}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TaskListChip}>
            <Text style={styles.TaskListChipText}>Não concluídas</Text>
            <View style={styles.TaskListChipBadge}>
              <Text style={styles.TaskListChipBadgeText}>
                {taskListFake.filter((task) => task.isDone === false).length}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <TaskListBody
        taskListFake={taskListFake}
        handleRemoveTask={handleRemoveTask}
        handleFinishTask={handleFinishTask}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TaskListHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  TaskListHeaderLeft: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#E2EBFA",
  },
  buttonText: {
    color: "#2563eb",
    fontFamily: "Inter500",
    fontSize: 14,
  },
  title: {
    fontFamily: "Inter700",
    fontSize: 20,
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: 14,
  },
  TaskListChipsWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  TaskListChips: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 20,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: "#9ca3af",
  },
  TaskListChip: {
    flexDirection: "row",
    gap: 6,
  },
  TaskListChipText: {
    color: "#9ca3af",
    fontFamily: "Inter500",
    fontSize: 14,
  },
  TaskListChipBadge: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: "#9ca3af",
  },
  TaskListChipTextActive: {
    color: "#2563eb",
    fontFamily: "Inter500",
    fontSize: 14,
  },
  TaskListChipBadgeActive: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  TaskListChipBadgeText: {
    color: "white",
    fontSize: 12,
  },
  TaskListItem: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "white",
  },
});
