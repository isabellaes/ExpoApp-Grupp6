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
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default function ReceptPage({ navigation, route }: Props) {
  const [SearchQuery, setSearchQuery] = useState<string>("");
  const [recepts, setRecept] = useState<Recept[] | null>(null);

  useEffect(() => {
    (() => {
      setRecept(data);
    })();
  }, []);

  const handleSearch = (text: any) => {
    const recepts: Recept[] = data.filter((recept) =>
      recept.receptName.includes(text)
    );
    setRecept(recepts);
  };

  const handleSortMeatRecept = () => {
    const recepts: Recept[] = data.filter((recept => recept.protein === "meat")
      
    );
    setRecept(recepts);
  };

  const handleSortFishRecept = () => {
    const recepts: Recept[] = data.filter((recept => recept.protein === "fish"))
    setRecept(recepts);
  };

  const handleSortVegetarian = () => {
    const recepts: Recept[] = data.filter((recept => recept.protein === "vegetarian"))
    setRecept(recepts);
  };


  return (
    <View style={styles.container}>
      <View>
        <Input
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.category}>
          <Button color="#8A8A8A"
                  title="Meat"
                  onPress={handleSortMeatRecept}
                />
          <Button color="#8A8A8A"
                  title="Fish"
                  onPress={handleSortFishRecept}
                />
          <Button color="#8A8A8A"
                  title="Vegetarian"
                  onPress={handleSortVegetarian}
                />
        </View>
        {recepts?.map((item) => (
          <View style={styles.item} key={item.id}>
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
      <View style={styles.homeAndLogInButton}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Logg In" onPress={() => navigation.navigate("LoggIn")} />
      </View>
    </View>
  );
}
