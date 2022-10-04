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
   loggedInUser?.favoritRecipe.push(route.params);
  }

  function removeRecipe () {
    return loggedInUser?.favoritRecipe.splice(0,1);
  }

  function nothingChange() {
    console.log("nothing change");
  }
 
  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(src);
    setSound(sound);
    await sound.playAsync();
  }, []);
  
  const handleToggleFavorite = useCallback(async () => {
    
     setIsFavorite(val => !val);

      if(!isFavorite) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        playSound();
        addRecipe();
      } else{
        removeRecipe();
      }  
  }, [removeRecipe, addRecipe, isFavorite, playSound]);

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
            source={{ uri: route.params.recipeImage }}
          />
          
          <Text style={styles.title}>{route.params.recipeName}</Text>
              <Pressable onPress={loggedInUser? handleToggleFavorite : nothingChange} style={styles.favoriteButton}>
                <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={35}
                
                />
              </Pressable>
          <Text style={styles.protein}>{route.params.protein}</Text>
          <Text style={styles.titledescription}> Description:</Text>
          <Text style={styles.description}>
            {route.params.recipeDescription}
          </Text>
          <Text style={styles.titleingridens}>Ingridiens: </Text>
          <Text style={styles.ingridiens}>
            {route.params.recipeIngridients}
          </Text>
        </Card>
      </ScrollView>

      <View style={styles.buttons}>
        <Button
          title="Go to favorits"
          onPress={() => loggedInUser ? navigation.navigate("Favorit") : navigation.navigate("LoggIn")}
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
  favoriteButton: {
    width: 35
  }
});
