import React, {useState, useCallback, useEffect} from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Pressable
} from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Card from "../components/cardComponent";
import { mockUser } from "../interfaces/userInterface";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';


type Props = NativeStackScreenProps<RootStackParamList, "Details">;
let src = require('../audio/alert.wav');


export default function DetailScreen({ navigation, route }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [currentSound, setSound] = useState<Audio.Sound|null>(null);
  const loggedInUser = mockUser.find((user) => user.loggedIn === true);
  
  function addRecipe() {
   const addUserFavoriteRecepie = loggedInUser?.favoritRecipe.push(route.params);
  
   return addUserFavoriteRecepie;
  }
 
  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(src);
    setSound(sound);
    await sound.playAsync();
  }, []);
  
  const handleToggleFavorite = useCallback(async () => {
     setIsFavorite(val => !val);

    if (isEnabled) {
      if(!isFavorite) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        playSound();
        addRecipe();
      }
    }
  }, [addRecipe, isEnabled, isFavorite, playSound]);

  useEffect(() => {
    currentSound ? () => {currentSound.unloadAsync();} : undefined;
  }, [currentSound]);

  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card>
          <Text style={styles.id}>recipe nr.{route.params.id}</Text>
          <Image
            style={styles.image}
            source={{ uri: route.params.receptImage }}
          />
          
          <Text style={styles.title}>{route.params.receptName}</Text>
              <Pressable onPress={handleToggleFavorite}>
                <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={35}
                />
              </Pressable>
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
