import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface TaskCardProps {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
  handleFinishTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  isDone,
  createdAt,
  handleFinishTask,
  handleRemoveTask,
}) => {
  return (
    <View key={id} style={styles.TaskListItem}>
      <Text style={[styles.title, { fontSize: 18 }]}>{title}</Text>
      <Text style={styles.subtitle}>{createdAt.toISOString()}</Text>
      <View style={{ marginTop: 8, gap: 8 }}>
        {!isDone && (
          <TouchableOpacity
            onPress={() => handleFinishTask(id)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => handleRemoveTask(id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
