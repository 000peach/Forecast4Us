const apiKey = "58f7aa5200aef94f5e369944791f3342";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(location){
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kp/h";
    document.querySelector(".visibility").innerHTML = data.visibility/1000 + "km";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunder-storm.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    }
    
    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})

var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbutton").click();
  }
});

