function renderData(data) {
    const city = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const icon = document.querySelector(".icon")
    const description = document.querySelector(".description");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    city.innerText = "Weather in " + data.location.name;
    temp.innerText = data.current.temp_f + "°F";
    icon.src = data.current.condition.icon;
    description.innerText = data.current.condition.text;
    humidity.innerText = "Humidity:" + data.current.humidity;
    wind.innerText = "Wind speed" +data.current.gust_mph + "m/h";
}

export default renderData