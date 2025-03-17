const apiKey="34e4c5615ac3b4d673c7939fdeee9043";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl2="https://api.ipgeolocation.io/astronomy?location=";
const apiKey2="f191e55ad53a42f0bb78986b3915965d";

const searchbox =document.querySelector(".search_bar input");
const searchbtn =document.querySelector(".search_bar button");
const weatherIcon=document.querySelector(".iconweather");


// Calling Api all data

async function cheakweather(city) {
        const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
        const response2 =await fetch(apiUrl2+city+`&apiKey=${apiKey2}`);
    // change api to json
        var data = await response.json();
        var Data =await response2.json();
    // dag ,city, wind ,humedity api
        document.querySelector(".headertemp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".city").innerHTML=data.name+",";
        document.querySelector(".country").innerHTML=Data.location.country;
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
        document.querySelector(".deg").innerHTML=data.wind.deg + "°";
        document.querySelector(".Humedity").innerHTML=data.main.humidity + "%";
        document.querySelector(".time-date").innerHTML=Data.date;
    // moon api
    document.querySelector(".moonrise").innerHTML = Data.moonrise;
    document.querySelector(".moonset").innerHTML = Data.moonset;
    document.querySelector(".moon_phase").innerHTML =Data.moon_phase;
    
    document.querySelector(".sunrise").innerHTML = Data.sunrise;
    document.querySelector(".sunset").innerHTML = Data.sunset;
    document.querySelector(".solar_noon").innerHTML = Data.solar_noon;
        
        
        
        

    // icon change
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/img/cloudy.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="/img/sun-200.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="/img/Rainn.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="/img/Drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="/img/snow.png";
        } 
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="/img/mist.png";
        }
}


searchbtn.addEventListener("click",()=>{
    cheakweather(searchbox.value);
});


















