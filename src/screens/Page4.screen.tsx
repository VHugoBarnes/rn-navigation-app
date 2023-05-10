import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props extends StackScreenProps<any, any> { }

export const Page4 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>
        Page4.screen
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Page1")}
      >
        <Text>
          Ir a pagina 1
        </Text>
      </Pressable>
    </View>
  );
};
