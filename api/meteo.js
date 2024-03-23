export class MeteoAPI {
    static async fetchWeatherFromCoords(coords) {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
        );
        if (!response.ok) {
            throw new Error('Erreur de réseau');
        }
        return response.json();
    }
}
