import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { data } from "../utils/mockData";
import Input from "../Components/Input";
import Item from "../Components/listRecept";
import Recept from "../Interfaces/receptInterface";

type Props = NativeStackScreenProps<RootStackParamList, "Recept">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "93%",
    padding: 20,
    borderRadius: 12,
    margin: 5,
    backgroundColor: "#A1A6AA",
  },
  homeAndLogInButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});

export default function ReceptPage({ navigation, route }: Props) {

  const [SearchQuery, setSearchQuery] = useState<string>("");
  const [recepts, setRecept] = useState<Recept[] | null>(null);
  
  useEffect(() =>{
    (() => {
      setRecept(data);
    })()
  }, []);

  const handleSearch = (text : any) => {
    const recepts: Recept[] = data.filter((recept) => 
      recept.receptDescription.includes(text))
    setRecept(recepts);
  }

  return (
    <View style={styles.container}>
        <View>
        <Input icon="md-search" placeholder="Search" onChangeText={(text) => handleSearch(text)}/>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {recepts?.map((item) => (
          <View style={styles.item}>
            <Text>
              <Item id={item.id}
                receptName={item.receptName}
                receptImage={item.receptImage} 
                protein={item.protein} 
                receptDescription={item.receptDescription} 
                receptIngridients={item.receptIngridients}/>
            </Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate("Details")}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.homeAndLogInButton}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Logg In" onPress={() => navigation.navigate("LoggIn")} />
      </View>
    </View>
  );
}
