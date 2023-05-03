import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
import Casa from "./Casa";

export default function App()
{
    return (
        <View style={css.tela}>
            <View style={css.tabuleiro}>
                <Casa />
                <Casa />
                <Casa />
                <Casa />
                <Casa />
                <Casa />
                <Casa />
                <Casa />
                <Casa />
            </View>

        </View>
    )
}

const css = StyleSheet.create({

    tela: {
        borderColor: "red",
        borderWidth: 15,
        borderStyle: "solid",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tabuleiro: {
        width: 300,
        height: 300,
        flexWrap: "wrap"
    }
   
});