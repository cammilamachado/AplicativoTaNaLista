import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lista from "../screens/Lista_Preenchida";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
export default function MyTabs() {
  const TabsLista = createBottomTabNavigator();
  return (
    <TabsLista.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Settings") {
            iconName = focused
              ? "bookmark"
              : "bookmark-outline";
          } else if (route.name === "Lista") {
            iconName = focused ? "list" : "list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons  size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabsLista.Screen name="Lista" component={Lista} />
      <TabsLista.Screen name = "Settings" component={teste}/>
    </TabsLista.Navigator>
  );
}
function teste() {
  return (
    <View>
      <button> TEste</button>
    </View>
  );
}
