import { Text, View } from "react-native";
import { s } from "./Home.style";

export function Home({}) {
    return (
        <>
            <View style={s.meteo_basic}>
                <Text style={{ fontSize: 60, color: "white" }}>
                    La météo basique
                </Text>
            </View>
            <View style={s.searchbar_container}>
                <Text style={{ fontSize: 60, color: "white" }}>
                    Barre de recherche
                </Text>
            </View>
            <View style={s.meteo_advanced}>
                <Text style={{ fontSize: 60, color: "white" }}>
                    La météo avancée
                </Text>
            </View>
        </>
    );
}

