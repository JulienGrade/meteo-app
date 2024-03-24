import { TouchableOpacity, View } from "react-native";
import {s} from "./ForecastBackButton.style";
import {Txt} from "../Txt/Txt";
import {useNavigation} from "@react-navigation/native";

export function ForecastBackButton({}) {
    const nav = useNavigation();
    return(
        <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
            <Txt> {"<"} </Txt>
        </TouchableOpacity>
    );
}
