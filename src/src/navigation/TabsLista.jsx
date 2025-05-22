import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lista from "../screens/Lista_Preenchida";
import Cronograma from "../screens/Tela_Cronograma";
import Estoque from "../screens/Tela_Estoque";
import Votacao from "../screens/Tela_Votacao";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const TabsLista = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <TabsLista.Navigator
      initialRouteName="Lista de compras"
      screenOptions={({ route }) => ({
        tabBarButton: (props) => {
          const { accessibilityState, onPress, children } = props;
          const focused = accessibilityState.selected;
          let backgroundColor = "#6B6B6B";
          if (focused) {
            if (route.name === "Lista de compras") {
              backgroundColor = "#682A2A";
            } else if (route.name === "Estoque") {
              backgroundColor = "#682A2A";
            } else if (route.name === "Cronograma") {
              backgroundColor = "#682A2A";
            } else if (route.name === "Votação") {
              backgroundColor = "#682A2A";
            }
          }
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {children}
            </TouchableOpacity>
          );
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "list-outline"; // valor padrão

          if (route.name === "Lista de compras") {
            iconName = focused ? "list" : "list-outline"; // troca a cor e o estilo do ícone caso selecionado ou não
          } else if (route.name === "Estoque") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Cronograma") {
            iconName = focused ? "today" : "today-outline";
          } else if (route.name === "Votação") {
            iconName = focused ? "checkbox" : "checkbox-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#fef7ff",
        tabBarInactiveTintColor: "#49454f",
      })}
    >
      <TabsLista.Screen name="Lista de compras" component={Lista} />
      <TabsLista.Screen name="Estoque" component={Estoque} />
      <TabsLista.Screen name="Cronograma" component={Cronograma} />
      <TabsLista.Screen name="Votação" component={Votacao} />
    </TabsLista.Navigator>
  );
}
