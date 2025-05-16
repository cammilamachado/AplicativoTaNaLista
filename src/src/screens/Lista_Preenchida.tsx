import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
export default function Lista() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <button>  Eu não faço nada  </button>
        </View>
    )
}