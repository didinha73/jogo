import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
export default function App()
{
    return (
        <View style={css.tela}>
            <View style={css.tabuleiro}>
                <View style={css.casa}><Icon name="cross" size={95} ></Icon></View>
                <View style={css.casa}></View>
                <View style={css.casa}></View>

                <View style={css.casa}><Icon name="circle" size={60}></Icon></View>
                <View style={css.casa}></View>
                <View style={css.casa}></View>

                <View style={css.casa}></View>
                <View style={css.casa}></View>
                <View style={css.casa}></View>
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
    },
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});