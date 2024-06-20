const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather_body');


async function checkWeather(city) {
    const api_key  = "d90f1cced59cc6e91daa320a8ad8c7a0";
    const url ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';


    const weather_data = await fetch('${url}').then(response => response.json());
    /*fetch function url se data pass krega jo ki json pass krega....aur response.json se hmara data string mein convert krega...aur await se hme pura data ek sath dega*/

    if(weather_data.cod === "404"){
        location_not_location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }


    location_not_location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML =  '${Math.round(weather_data.main.temp - 273.15)}°C'; /*weather-data k main mein temp hai in Kelvins*/
    description.innerHTML = '${weather_data.weather[0].description}';
    humidity.innnerHTML = '${weather_data.main.humidity}%';
    wind_speed.innerHTML ='${weather_data.wind.speed}Km/Hr';

    switch(weather_data.weather[0].main){
        case'Clouds' :
        weather_img.src = "/assets/cloud.png";
        break;

        case'Clear' :
        weather_img.src = "/assets/clear.png";
        break;

        case'Rain' :
        weather_img.src = "/assets/rain.png";
        break;

        case'Mist' :
        weather_img.src = "/assets/mist.png";
        break;

        case'Snow' :
        weather_img.src = "/assets/snow.png";
        break;

     }

    console.log(weather_data);

}

searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value);
} );