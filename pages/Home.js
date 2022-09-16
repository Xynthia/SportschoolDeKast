import { Button, View } from "react-native";
import { Cursussen } from "./Cursussen";
import { PersoonlijkeTrainer } from "./PersoonlijkeTrainer";
import { Abonnement } from "./Abonnement";
import { StyleSheet } from "react-native-web";
import { padding } from "@mui/system";

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

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Button
          title="cursussen"
          onPress={() => navigation.navigate("Cursussen")}
        />
        <Button
          title="persoonlijke Trainer"
          onPress={() => navigation.navigate("PersoonlijkeTrainer")}
        />
        <Button
          title="abonnement"
          onPress={() => navigation.navigate("Abonnement")}
        />
      </View>
    </>
  );
};

export default Home;
