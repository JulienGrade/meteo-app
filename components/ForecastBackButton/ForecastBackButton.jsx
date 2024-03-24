import { TouchableOpacity, View } from "react-native";
import {s} from "./ForecastBackButton.style";
import {Txt} from "../Txt/Txt";

export function ForecastBackButton({}) {
    return(
        <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
            <Txt> {"<"} </Txt>
        </TouchableOpacity>
    );
}
