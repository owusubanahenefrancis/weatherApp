const key = 'b479b55c3108abe69823929ce470cd2b'
const cityname = 'Accra'

const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=metric`

let temp = document.getElementById('temp')
let feel = document.getElementById('feel')
let humidity = document.getElementById('humidity')
let rain = document.getElementById('rain')
let pressure = document.getElementById('pressure')
let desc = document.getElementById('desc')
let wind = document.getElementById('wind')
let date = document.getElementById('date')

let dates = new Date()
date.innerHTML = dates.toDateString()



fetch(api).then(response=>response.json()
).then((data)=>{
    console.log(data)
    temp.innerHTML = data.main.temp
    feel.innerHTML = data.main.feels_like
    desc.innerHTML = data.weather[0].description
    humidity.innerHTML = data.main.humidity
    pressure.innerHTML = data.main.pressure
    wind.innerHTML = data.wind.speed
    
}).catch((error)=>{
    console.log(error)
})