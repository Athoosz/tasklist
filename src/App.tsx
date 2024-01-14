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
    Inter100: require("../assets/fonts/Inter-Thin.ttf"),
    Inter200: require("../assets/fonts/Inter-ExtraLight.ttf"),
    Inter300: require("../assets/fonts/Inter-Light.ttf"),
    Inter400: require("../assets/fonts/Inter-Regular.ttf"),
    Inter500: require("../assets/fonts/Inter-Medium.ttf"),
    Inter600: require("../assets/fonts/Inter-SemiBold.ttf"),
    Inter700: require("../assets/fonts/Inter-Bold.ttf"),
    Inter800: require("../assets/fonts/Inter-ExtraBold.ttf"),
    Inter900: require("../assets/fonts/Inter-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // fecha splashscreen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded ? (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar
        translucent={false}
        style="dark"
        backgroundColor="transparent"
      />
      <TaskListScreen />
    </View>
  ) : null;
}
