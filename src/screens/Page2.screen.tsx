import React from "react";
import { Pressable, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import GeneralStyles from "../styles/GeneralStyles.component";

export const Page2 = () => {
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView>
      <Text style={[GeneralStyles.title]}>
        Page #2
      </Text>

      <Pressable
        onPress={() => navigator.navigate("Page1")}
      >
        <Text>
          Ir a pagina 1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigator.navigate("Page3", { id: 2, name: "Victor" })}
      >
        <Text>
          Ir a pagina 3
        </Text>
      </Pressable>
    </SafeAreaView >
  );
};
