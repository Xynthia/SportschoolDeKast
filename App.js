import { Button } from "@mui/material";
import { width } from "@mui/system";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Home } from "./pages/Home";
import { Cursussen } from "./pages/Cursussen";
import { PersoonlijkeTrainer } from "./pages/PersoonlijkeTrainer";
import { Abonnement } from "./pages/Abonnement";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/home.png")}
              />
            ),
            headerRight: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/codescannner.webp")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cursussen"
          component={Cursussen}
          options={{
            headerLeft: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/home.png")}
              />
            ),
            headerRight: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/codescannner.webp")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="PersoonlijkeTrainer"
          component={PersoonlijkeTrainer}
          options={{
            headerLeft: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/home.png")}
              />
            ),
            headerRight: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/codescannner.webp")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Abonnement"
          component={Abonnement}
          options={{
            headerLeft: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/home.png")}
              />
            ),
            headerRight: () => (
              <Image
                style={styles.tinyLogo}
                source={require("./styles/icons/codescannner.webp")}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
