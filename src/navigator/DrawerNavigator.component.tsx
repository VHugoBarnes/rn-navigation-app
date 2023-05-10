import React from "react";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Tab from "./Tab.navigator";
import { View, Image } from "react-native";
import Text from "../components/ui/Text.component";
import FollowCount from "../components/user/FollowCount.component";

const Header = () => {
  const followingCount = 516;
  const followersCount = 35;

  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/1634347831468126208/QToH4FpW_400x400.jpg",
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 2000,
          marginVertical: 10,
        }}
      />
      <Text bold>
        Victor Hugo
      </Text>
      <Text secondary>
        @VHugoBarnes
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <FollowCount count={followingCount} isFollowing />
        <FollowCount count={followersCount} isFollowers />
      </View>
    </View>
  );
};

const ButtonList = () => {
  return (<View />);
};

const MoreOptions = () => {
  return (<View />);
};

const Footer = () => {
  return (<View />);
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={InternalMenu}

    >
      <Drawer.Screen name="Tab" component={Tab} />
    </Drawer.Navigator>
  );
};

const InternalMenu = () => {
  return (
    <DrawerContentScrollView>
      <View>
        <Header />
        <ButtonList />
        <MoreOptions />
      </View>
      <Footer />
    </DrawerContentScrollView>
  );
};
