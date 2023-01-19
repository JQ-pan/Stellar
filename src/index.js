import { getWeatherData } from "./scripts/weather";
import { getMap } from "./scripts/getMap";

document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    
    searchButton.addEventListener("click", function(event) {
        const input = searchInput.value;
        getWeatherData(input);
    })

    window.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            getWeatherData(searchInput.value)
        }
    })
    
    getWeatherData('10001');
})


