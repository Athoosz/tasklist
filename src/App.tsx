import { ScrollView, View } from "react-native";
import { TaskListScreen } from "./views/TaskList";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// previne que a splashscreen se feche sozinha
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter100": require("../assets/fonts/Inter-Thin.ttf"),
    "inter200": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "inter300": require("../assets/fonts/Inter-Light.ttf"),
    "inter400": require("../assets/fonts/Inter-Regular.ttf"),
    "inter500": require("../assets/fonts/Inter-Medium.ttf"),
    "inter600": require("../assets/fonts/Inter-SemiBold.ttf"),
    "inter700": require("../assets/fonts/Inter-Bold.ttf"),
    "inter800": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "inter900": require("../assets/fonts/Inter-Black.ttf"),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // fecha splashscreen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded ? (
    <ScrollView onLayout={onLayoutRootView} keyboardShouldPersistTaps="handled">
      <StatusBar translucent={false} style="dark" backgroundColor="transparent" />
      <TaskListScreen />
    </ScrollView>
  ) : null;
}
