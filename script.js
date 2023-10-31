const searchCity = async () => {
  const city = document.getElementById('searchInput').value
  const data = await getWeatherData(city)
  showWeatherData(data)

}
const getWeatherData = (city) => {
  const apiKey = 'feaddb058e73880988c3da1a8c0a7dc7'
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  return fetch(apiCall)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err))
}
const showWeatherData = (weatherData) => {
  console.log(weatherData)
  document.getElementById('iconImg').inner
  document.getElementById('cityName').innerText = weatherData.name
  // Display temperature with "°C" symbol
  const temperature = weatherData.main.temp;
  document.getElementById('tempData').innerText = `${temperature}°C`;
  document.getElementById('humidityData').innerText = weatherData.main.humidity
  document.getElementById('windData').innerText = weatherData.wind.speed

  //icon
  const iconCode = weatherData.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`
  const weatherIcon = document.getElementById('iconImg')
  weatherIcon.src = iconUrl
  weatherIcon.alt = weatherData.weather[0].description
}