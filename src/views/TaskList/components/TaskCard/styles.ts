import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    TaskListItem: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: "white",
    },
  });