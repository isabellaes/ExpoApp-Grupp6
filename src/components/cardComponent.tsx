import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card(props: any) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "#A1A6AA",
    marginHorizontal: 8,
    marginVertical: 12,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
});
