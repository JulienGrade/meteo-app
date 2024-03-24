export class MeteoAPI {
    static async fetchWeatherFromCoords(coords) {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
            );
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw new Error('Erreur lors de la récupération des données météorologiques');
        }
    }

    static async fetchCityFromCoords(coords) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`,
                {
                    headers: {
                        'User-Agent': 'YourAppName', // Important pour respecter les politiques de Nominatim
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            const { address: { city, village, town } } = data;
            return city || village || town;
        } catch (error) {
            console.error(error);
            throw new Error('Erreur lors de la récupération du nom de la ville à partir des coordonnées');
        }
    }

    static async fetchCoordsFromCity(city) {
        try {
            const response = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&language=fr&count=1`
            );
            if (!response.ok) {
                throw new Error('Erreur de réseau lors de la récupération des coordonnées');
            }
            const data = await response.json();
            const { latitude: lat, longitude: lng } = data.results[0];

            return { lat, lng };
        } catch (e) {
            throw new Error("Pas de coordonnées trouvées pour la recherche : " + city);
        }
    }
}

