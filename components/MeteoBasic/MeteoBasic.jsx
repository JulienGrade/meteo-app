import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { s } from "./MeteoBasic.style.js";
import {Clock} from "../Clock/Clock";

export function MeteoBasic({ temperature, city, interpretation }) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt style={{fontSize:30}}>{city}</Txt>

            <Txt style={s.weather_label}>{interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    );
}

