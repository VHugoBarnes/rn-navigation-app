import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Pressable, Text, SafeAreaView } from "react-native";
import GeneralStyles from "../styles/GeneralStyles.component";

interface Props extends StackScreenProps<any, any> { }

export const Page1 = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text style={[GeneralStyles.title]}>
        Page #1
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Page2")}
      >
        <Text>
          Ir a pagina 2
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Page3", { id: 1, name: "" })}
      >
        <Text>
          Ir a pagina 3
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Page4")}
      >
        <Text>
          Ir a pagina 4
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
