import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { RootStackParamList } from "../../App";
import * as Speech from "expo-speech";
import { mockUser } from "../interfaces/userInterface";
import Item from "../components/listRecipeComponent";

type Props = NativeStackScreenProps<RootStackParamList, "Favorit">;

export default function FavoritScreen({ navigation, route }: Props) {
  const speak = () => {
    const thingToSay = "Welcome, to your side, Eva-Li";
    Speech.speak(thingToSay);
  };
  const loggedInUser = mockUser.find((user) => user.loggedIn === true);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.speak}>
          <Button title="Welcome message 🗯 Press hear! 👈" onPress={speak} />
        </View>
        {loggedInUser?.favoritRecipe.map((item) => (
          <View>
            <Text>
              <Item
                id={item.id}
                receptName={item.receptName}
                receptImage={item.receptImage}
                protein={item.protein}
                receptDescription={item.receptDescription}
                receptIngridients={item.receptIngridients}
              />
            </Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate("Details", item)}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Recept" onPress={() => navigation.navigate("Recept")} />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  speak: {
    marginTop: 10,
    backgroundColor: "lightgrey",
    padding: 7,
    borderRadius: 15,
  },
  //   id: {
  //     marginLeft: 5,
  //   },
  //   item: {
  //     width: "100%",
  //     height: "auto",
  //     padding: 20,
  //     backgroundColor: "#A1A6AA",
  //   },
  //   title: {
  //     fontSize: 22,
  //     color: "black",
  //     marginTop: 5,
  //     marginLeft: 5,
  //   },
  //   protein: {
  //     fontSize: 15,
  //     color: "black",
  //     margin: 5,
  //     marginBottom: 10,
  //   },
  //   image: {
  //     width: "100%",
  //     height: 200,
  //     borderRadius: 15,
  //     marginTop: 10,
  //   },
  //   titledescription: {
  //     fontSize: 17,
  //   },
  //   description: {
  //     fontSize: 15,
  //     color: "black",
  //     margin: 5,
  //     marginBottom: 15,
  //   },
  //   titleingridens: {
  //     fontSize: 17,
  //     marginLeft: 5,
  //   },
  //   ingridiens: {
  //     fontSize: 15,
  //     color: "black",
  //     margin: 5,
  //   },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});
