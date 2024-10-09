import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos Screen</Text>

      <Video
        source={{ uri: "https://drive.google.com/uc?export=download&id=1SrTfRMt591Xvv9l6bBkT241qeEQXr0WK" }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  video: {
    width: 400,
    height: 350,
  },
});

export default SettingsScreen;
