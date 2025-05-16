import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lista from '../screens/Lista_Preenchida';
export default function MyTabs() {
    const TabsLista = createBottomTabNavigator();
    return (
        <TabsLista.Navigator>
            <TabsLista.Screen name="Lista" component={Lista} />
        </TabsLista.Navigator>
    );
}