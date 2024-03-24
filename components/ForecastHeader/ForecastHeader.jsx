import { View } from "react-native";
import {s} from "./ForecastHeader.style";
import {Txt} from "../Txt/Txt";
import {ForecastBackButton} from "../ForecastBackButton/ForecastBackButton";
import {useRoute} from "@react-navigation/native";

export function ForecastHeader({}) {
    const { params } = useRoute();

    return(
        <View style={s.header}>
            <ForecastBackButton/>
            <View style={s.header_texts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévisions sur 7 jours</Txt>
            </View>
        </View>
    );
}

