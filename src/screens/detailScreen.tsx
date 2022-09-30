import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Card from "../components/cardComponent";
import { mockUser } from "../interfaces/userInterface";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;
const loggedInUser = mockUser.find((user) => user.loggedIn === true);

export default function DetailScreen({ navigation, route }: Props) {
  function addRecipe() {
   const addUserFavoriteRecepie = loggedInUser?.favoritRecipe.push(route.params);
  
   return(addUserFavoriteRecepie)
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card>
          <Text style={styles.id}>recipe nr.{route.params.id}</Text>
          <Image
            style={styles.image}
            source={{ uri: route.params.receptImage }}
          />
          <Text style={styles.title}>
            {route.params.receptName} 👉
            <View>
              <Button title="Add to favorit" onPress={addRecipe}></Button>
            </View>
          </Text>

          <Text style={styles.protein}>{route.params.protein}</Text>
          <Text style={styles.titledescription}> Description:</Text>
          <Text style={styles.description}>
            {route.params.receptDescription}
          </Text>
          <Text style={styles.titleingridens}>Ingridiens: </Text>
          <Text style={styles.ingridiens}>
            {route.params.receptIngridients}
          </Text>
        </Card>
      </ScrollView>

      <View style={styles.buttons}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />

        <Button
          title="Go to favorits"
          onPress={() => navigation.navigate("Favorit")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  id: {
    marginLeft: 5,
  },
  item: {
    width: "100%",
    height: "auto",
    padding: 20,
    backgroundColor: "#A1A6AA",
  },
  title: {
    fontSize: 22,
    color: "black",

    marginLeft: 5,
  },
  protein: {
    fontSize: 15,
    color: "black",
    margin: 5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  },
  titledescription: {
    fontSize: 17,
  },
  description: {
    fontSize: 15,
    color: "black",
    margin: 5,
    marginBottom: 15,
  },
  titleingridens: {
    fontSize: 17,
    marginLeft: 5,
  },
  ingridiens: {
    fontSize: 15,
    color: "black",
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});
