const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=kalyani&appid=8779c2da800457b14aa7493e28b6aa49&units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}
