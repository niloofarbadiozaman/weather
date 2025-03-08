const apiKey="34e4c5615ac3b4d673c7939fdeee9043";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox =document.querySelector(".search_bar input");
const searchbtn =document.querySelector(".search_bar button");



// Calling Api all data

async function cheakweather(city) {
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`)
    
}























