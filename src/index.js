import { getWeatherData } from "./scripts/weather";
import { getMap } from "./scripts/getMap";

document.addEventListener('DOMContentLoaded', () => {

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function(event) {
        const input = document.getElementById("searchInput").value;
        getWeatherData(input);
    })

    const searchInput = document.getElementById("searchInput");
    window.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            getWeatherData(document.getElementById("searchInput").value)
        }
    })
    
    getWeatherData('10001');
    getMap();
})


