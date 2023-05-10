import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParams } from "../navigator/StackNavigator.component";
import GeneralStyles from "../styles/GeneralStyles.component";

interface Props extends StackScreenProps<RootStackParams, "Page3"> { }

export const Page3 = ({ route }: Props) => {
  const navigator = useNavigation<StackNavigationProp<ParamListBase>>();
  const params = route.params;

  return (
    <SafeAreaView>
      <Text style={[GeneralStyles.title]}>
        Page #3
      </Text>

      <Text style={[GeneralStyles.title]}>
        {params.name}
      </Text>

      <Pressable
        onPress={() => navigator.navigate("Page1")}
      >
        <Text>
          Ir a pagina 1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigator.navigate("Page2")}
      >
        <Text>
          Ir a pagina 2
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
