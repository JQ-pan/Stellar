import renderData from "./renderData";

export async function getWeatherData(userInput) {
    const options = {
        method: 'GET',
    }
    
    const token = "c4883df403d644f59b1233931231501"

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${token}&q=${userInput}&days=1&aqi=no&alerts=no`

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.error("ERROR:", error);
        });
}
