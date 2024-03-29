import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Page1 } from "../screens/Page1.screen";
import { Page2 } from "../screens/Page2.screen";
import { Page3 } from "../screens/Page3.screen";
import { Page4 } from "../screens/Page4.screen";

export type RootStackParams = {
  Page1: undefined,
  Page2: undefined,
  Page3: {
    id: number,
    name: string
  },
  Page4: undefined,
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} />
    </Stack.Navigator>
  );
};
