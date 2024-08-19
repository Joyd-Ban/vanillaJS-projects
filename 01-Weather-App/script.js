const search = document.querySelector(".search-img");
const loc = document.querySelector(".search-location");
const weather = document.querySelector(".weather-img");
const temp = document.querySelector(".weather-temp");
const cityName = document.querySelector(".weather-city");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const wind = document.querySelector(".wind");
const display = document.querySelector(".weather");
async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8779c2da800457b14aa7493e28b6aa49&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  temp.textContent = `${Math.round(+data.main.temp)}°C`;
  cityName.textContent = data.name;
  humidity.textContent = `${Math.round(+data.main.humidity)}%`;
  pressure.textContent = `${Math.round(+data.main.pressure)} hPa`;
  wind.textContent = `${Math.round(+data.wind.speed)} m/sec`;
  display.classList.remove("hidden");
}

search.addEventListener("click", function (e) {
  const city = loc.value;

  checkWeather(city);
});
