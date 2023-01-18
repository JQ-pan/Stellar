// Import method from weather script
import { getWeatherData } from "./scripts/weather";
import { getMap } from "./scripts/getMap";

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

    console.log("Map:" + map);
    console.log(map);
    console.log(".mapboxgl: " + mapboxgl);
    console.log(mapboxgl);

    // window.getMap = getMap;



    getWeatherData('10001');
    getMap();
})


