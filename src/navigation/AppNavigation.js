import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import WishlistScreen from "../screen/WishlistScreen/WishlistScreen";
import HistoryScreen from "../screen/HistoryScreen/HistoryScreen";
import DetailsScreen from "../screen/DetailsScreen/DetailsScreen";
import HomeIcon from "../../assets/icon/tab1.png";
import HomeIcon2 from "../../assets/icon/tab2.png";
import HomeIcon3 from "../../assets/icon/tab3.png";
import { Image } from "react-native";
const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={HomeIcon}
              size={size}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen  options={{
          tabBarIcon: ({ size }) => (
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={HomeIcon2}
              size={size}
            />
          ),
        }} name="Wishlist" component={WishlistScreen} />
      <Tab.Screen  options={{
          tabBarIcon: ({ size }) => (
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={HomeIcon3}
              size={size}
            />
          ),
        }} name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="TabNavigator" component={TabNavigator} />
      <AppStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </AppStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar StatusBarStyle="light" />
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
