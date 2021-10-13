import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, Image } from 'react-native';
import CustomListview from './List/CustomList';

export default function App() {
  const BG_IMG = 'https://images.all-free-download.com/images/graphiclarge/green_natural_blur_the_background_01_vector_158354.jpg';
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calm Your Mind</Text>
      <Image style={StyleSheet.absoluteFill} source = {{uri: BG_IMG}} />
      <CustomListview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 45,
    fontSize: 20,
    zIndex: 999,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  
});
