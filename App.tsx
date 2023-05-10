import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator.component";
import LanguageContext from "./src/contexts/LanguageContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [language, setLanguage] = React.useState("en");

  React.useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    };
    loadLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </LanguageContext.Provider>
  );
};

export default App;
