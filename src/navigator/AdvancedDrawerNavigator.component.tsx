import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { Page2 } from "../screens/Page2.screen";
import { Text, Pressable } from "react-native";
import { StackNavigator } from "./StackNavigator.component";

const Drawer = createDrawerNavigator();

export const AdvancedDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={InternalMenu}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
      <Drawer.Screen name="Page2" component={Page2} />
    </Drawer.Navigator>
  );
};

const InternalMenu = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <Text>
        Hello world
      </Text>

      <Pressable
        onPress={() => {
          props.navigation.navigate("Page1");
        }}
      >
        <Text>
          Page 1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          props.navigation.navigate("Page2");
        }}
      >
        <Text>
          Page 2
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};
