const apikey = "5a4afd3eedcda489ee1e0fa2cb32e8f4";
const  apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkwaether(city) {
    const response = await fetch(apiurl  + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        

    }else{
        var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition === "clouds") {
        weathericon.src = "images/clouds.png";
    } else if (weatherCondition === "rain") {
        weathericon.src = "images/rain.png";
    } else if (weatherCondition === "snow") {
        weathericon.src = "images/snow.png";
    } else if (weatherCondition === "clear") {
        weathericon.src = "images/clear.png";
    } else if (weatherCondition === "drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (weatherCondition === "mist") {
        weathericon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


    }
    
}

searchbtn.addEventListener("click", ()=>{
checkwaether(searchbox.value);
})