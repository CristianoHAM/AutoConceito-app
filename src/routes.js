import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import ManutençõesScreen from "./screens/Manutencao";
import LocalScreen from "./screens/Local";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#5d5d5d",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#7bda7c",
          borderTopWidth: 0,

          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 30,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="Manutenções"
        component={ManutençõesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Entypo name="tools" size={50} color={color} />;
            }
            return <Entypo name="tools" size={35} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#58be5a",
            height: 100,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 36,
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={50} color={color} />;
            }
            return <Ionicons name="home-sharp" size={35} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#58be5a",
            height: 100,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 36,
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Tab.Screen
        name="Local"
        component={LocalScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="location" size={50} color={color} />;
            }
            return <Ionicons name="location-sharp" size={35} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#58be5a",
            height: 100,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 36,
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;

/**
<Tab.Screen
name="Login"
component={LoginScreen}
options={{ headerShown: false }}
/>
*/
