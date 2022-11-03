const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");

const apiKey = "e417df62e04d3b1b111abeab19cea714";

const citySearch = () => {
    
    const cityNameValue = document.querySelector(".cityNameValue").value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
        temp.innerHTML = Math.round(data.main.temp - 273) + "&deg" +"C";
        cityName.innerHTML = data.name
    })
    .catch((e) => console.log("ERROR: " + e));

}