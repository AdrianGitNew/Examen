import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

const FotosScreen = () => {

    return (

        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
                >Nah id win </Text>
                            <Image 
                source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QG3METzSviNGrWfoOWvjMgAAAA&pid=Api&P=0&w=300&h=300' }} 
                style={{
                    width: 200,
                    height: 250,
                    resizeMode: 'cover',
                    marginBottom: 20,
                    marginHorizontal: 110,
                }}
            />
                        <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: ""
                }}
                >Nah youd Lose</Text>
                            <Image 
                source={{ uri: 'https://staticg.sportskeeda.com/editor/2023/09/16a24-16954258684331-1920.jpg' }} 
                style={{
                    width: 300,
                    height: 350,
                    resizeMode: 'center',
                    marginHorizontal: 50,
                    marginVertical: -50,
                }}
            />
            </View>

    );
    }

export default FotosScreen;