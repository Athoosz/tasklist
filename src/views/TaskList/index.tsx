import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export const TaskListScreen: React.FC = () => {
  const taskListFake = [
    {
      id: 1,
      title: "Cuidar do cachorro",
      isDone: true,
    },
    {
      id: 2,
      title: "Dar agua pro cachorro",
      isDone: false,
    },
  ];
  return (
    <View style={styles.taskListWrapper}>
      {/* TaskHeader */}
      <View style={styles.inputHeader}>
        <TextInput
          style={styles.input}
          placeholder="Insira a task"
          placeholderTextColor="#555"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Tarefa</Text>
        </TouchableOpacity>
      </View>

      {/* TaskList */}
      <View style={styles.taskBodyWrapper}>
        {/* Task1 */}
        <View style={styles.taskCard}>
          <Text>{taskListFake[0].title}</Text>
          <View style={styles.taskCardGroupButton}>
            <TouchableOpacity style={[styles.taskCardButton, styles.taskCardButtonExclude]}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Task2 */}
        <View style={styles.taskCard}>
          <Text>{taskListFake[1].title}</Text>
          <View style={styles.taskCardGroupButton}>
            <TouchableOpacity style={[styles.taskCardButton, styles.taskCardButtonDone]}> 
              <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.taskCardButton, styles.taskCardButtonExclude]}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskListWrapper: {
    gap: 24,
  },
  inputHeader: {
    paddingHorizontal: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 12,
  },

  input: {
    flex: 1,
    color: "#111",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
    fontFamily: "inter400",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#1BCBF2",
  },
  buttonText: {
    fontFamily: "inter600",
    fontSize: 14,
    color: "#FFFFFF",
  },
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
    padding: 8,
    alignItems: "center",
  },
  taskBodyWrapper: {
    gap: 12,
    paddingHorizontal: 12,
  },
  taskCardGroupButton: {
    flexDirection: "row",
    gap: 4,
  },
  taskCardButton: {
    padding : 7,
    borderRadius: 10,

  },
  taskCardButtonDone: {
    backgroundColor: "green",
  },
  taskCardButtonExclude: {
    backgroundColor: "red",
  },
});
