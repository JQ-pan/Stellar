// Import method from weather script
import { getWeatherData } from "./scripts/weather";
import { getMap } from "./scripts/getMap";
import renderData from "./scripts/renderData";

document.addEventListener('DOMContentLoaded', () => {
    
    // Add the method to the window
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function(event) {
        const input = document.getElementById("searchInput").value;
        getWeatherData(input);
    })

    // const searchInput = document.getElementById("searchInput");
    window.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            getWeatherData(document.getElementById("searchInput").value)
        }
    })

    window.getWeatherData = getWeatherData;
    // window.getMap = getMap;

    getMap();
})


