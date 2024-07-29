import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="index">
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}