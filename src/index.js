import { getWeatherData } from "./scripts/weather";

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

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    getWeatherData('10001');
})


