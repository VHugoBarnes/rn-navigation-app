import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home.screen";
import Search from "../screens/Search.screen";
import Spaces from "../screens/Spaces.screen";
import Communities from "../screens/Communities.screen";
import Notifications from "../screens/Notifications.screen";
import DirectMessages from "../screens/DirectMessages.screen";

const TabNav = createBottomTabNavigator();

const Tab: React.FC = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <TabNav.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <TabNav.Screen name="Spaces" component={Spaces} options={{ headerShown: false }} />
      <TabNav.Screen name="Communities" component={Communities} options={{ headerShown: false }} />
      <TabNav.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <TabNav.Screen name="DM" component={DirectMessages} options={{ headerShown: false }} />
    </TabNav.Navigator>
  );
};

export default Tab;
