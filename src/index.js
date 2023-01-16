// Import method from weather script
import { getWeatherData } from "./scripts/weather";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');
    
    // Add the method to the window
    window.getWeatherData = getWeatherData;
})


