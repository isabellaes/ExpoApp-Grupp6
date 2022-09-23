import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {

  const image = require('../images/icon.png')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy Recept</Text>
      <Image source={image} style={styles.logoImage}/>
      <Text style={styles.textStyle} onPress={() => console.log("Link to sign-in page")}>Sign In</Text>
      <Text style={styles.textStyle} onPress={() => console.log("Link to recept page")}>Use Without Log-In</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CF7E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 130,
    margin: 40
  },
  textStyle: {
    height: 50,
    width: '80%',
    margin: 15,
    backgroundColor: 'grey',
    justifyContent: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 50,
    margin: 30,
    color: '#6A0617'
  }
});