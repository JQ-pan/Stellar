function renderData(data) {
    const city = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const icon = document.querySelector(".icon")
    const description = document.querySelector(".description");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    // const long = Number(data.location.lon);
    // const latt = Number(data.location.lat);

    // console.log(long, latt)

    city.innerText = "Weather in " + data.location.name;
    temp.innerText = data.current.temp_f + "°F";
    icon.src = data.current.condition.icon;
    description.innerText = data.current.condition.text;
    humidity.innerText = "Humidity: " + data.current.humidity + "%";
    wind.innerText = "Wind speed: " + data.current.gust_mph + " mi/h";
    
    document.querySelector(".weather").classList.remove("loading");

    const body = document.getElementsByTagName("BODY")[0];

    const searchTerm = data.location.name.split(" ").join("").toLowerCase();
    body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + searchTerm + "')"
}

export default renderData