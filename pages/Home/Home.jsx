import { Text, View } from "react-native";
import { s } from "./Home.style";
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
} from "expo-location";
import {useEffect, useState} from "react";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import {MeteoBasic} from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";

export function Home({}) {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const currentWeather = weather?.current_weather;

    useEffect(() => {
        getUserCoords();
    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords);
        }
    }, [coords]);

    async function fetchWeather(coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(
            coordinates
        );
        setWeather(weatherResponse);
    }

    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === "granted") {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        } else {
            setCoords({ lat: "50.58", lng: "3.06" });
        }
    }
    return currentWeather?(
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic
                    temperature={Math.round(currentWeather?.temperature)}
                    city="Todo"
                    interpretation={getWeatherInterpretation(
                        currentWeather.weathercode
                    )}
                />
            </View>
            <View style={s.searchbar_container}>
                <Txt style={{ fontSize: 60}}>
                    Barre de recherche
                </Txt>
            </View>
            <View style={s.meteo_advanced}>
                <Txt style={{ fontSize: 60}}>
                    La météo avancée
                </Txt>
            </View>
        </>
    ):null;
}

