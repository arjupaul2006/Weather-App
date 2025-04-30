const searchInput = document.getElementById("userInput")
const searchButton = document.getElementById("searchButton")
const weatherImage = document.getElementById("middleImage")
const temp = document.querySelector(".temp")
const city = document.querySelector(".location")
const humidity = document.querySelector(".humidity-value")
const windSpeed = document.querySelector(".wind-value")


async function checkWeather() {

    try{
        const apiKey = '816eb3954fe0e098344df04bfa2ef462'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric &q=${searchInput.value}`

        const response = await fetch(apiUrl + `&appid=${apiKey}`)
        var data = await response.json()
        console.log(data)

        weatherImage.src = `${data.weather[0].main}.png`
        console.log(data.weather[0].main)

        city.innerHTML = data.name

        data.main.temp = (data.main.temp - 273.15).toFixed(2)
        temp.innerHTML = Math.round(data.main.temp) + '°c'

        humidity.innerHTML = `${data.main.humidity}%`

        windSpeed.innerHTML = `${data.wind.speed} km/hr`
    }

    catch{
        alert("Data Not Found!!!")
    }

}
function getWeatherDetails(){
    checkWeather()
}