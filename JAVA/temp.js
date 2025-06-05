
const apiKey = "dacb039843efad6fd947393ed3cf598a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const bgvideo = document.querySelector("#bg-video");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

       
        const weatherMain = data.weather[0].main.toLowerCase();

        if (weatherMain === "clouds") {
            weathericon.src = "img/cloud.png";
            bgvideo.src="video/cloud.mp4"
        } else if (weatherMain === "clear") {
            weathericon.src = "img/clear.png";
             bgvideo.src="video/5060630-hd_1920_1080_30fps.mp4"
        } else if (weatherMain === "rain") {
            weathericon.src = "img/rainyy.jpg";
             bgvideo.src="video/rain.mp4"
        } else if (weatherMain === "drizzle") {
            weathericon.src = "img/drizzle.png";
             bgvideo.src=""
        } else if (weatherMain === "mist") {
            weathericon.src = "img/mist.png";
             bgvideo.src=""
        } else if (weatherMain === "snow") {
            weathericon.src = "img/snow.png";
             bgvideo.src="video/snow.mp4"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

// Event listeners
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

searchbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});

