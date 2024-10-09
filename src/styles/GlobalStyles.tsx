import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Button
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 23,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '105%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 5,
    },
    screenFirstNumber: {
        fontSize: 70,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 70,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})