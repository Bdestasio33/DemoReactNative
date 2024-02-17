import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorScreen from "./components/calculator/Calculator";
import NumberFinderScreen from "./components/numberFinder/NumberFinder";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculator">
        <Drawer.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a simple alert from navigation")}
                title="Info"
                color="#3d3d3d"
              />
            ),
          }}
        />
        <Drawer.Screen name="Number Finder" component={NumberFinderScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
