const apiKey = '1d21fcf1c51ca60806bd5f560d12d8bc';// variable to store apikey from OpenWeatherMap
const cityInput = document.getElementById('cityInput');//to store input from the search bar
const weatherButton = document.getElementById('btn');//the search button
const weatherInfo = document.getElementById('weather-info');//the div where the weather info will be displayed

weatherButton.addEventListener('click', function() {//adding event listener where the button will be clicked
  const city = cityInput.value;//takes the value of the input field and stores it to variable city
  if (!city) {//if the input field is empty then alert will pop up
    alert('Please enter a city name');
    return;
  }

  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)//a fetch request to OpenWeatherMap Api to fetch the weather data for the entered city
  .then(response => {//if the response is not ok then an error will be thrown
    if (!response.ok) {
      throw new Error(`HTTP status code error! - ${response.status}`);
    }
    return response.json();
  })
  .then(data => {// Check if the previous content is an error message
    if (weatherInfo.innerHTML.includes('City not found')) {
      weatherInfo.innerHTML = '';//if it is then the content will be cleared
    }
    //if it is not then the weather info will be displayed
    weatherInfo.innerHTML += ` 
      <p>The weather in ${city} is ${data.weather[0].description}. <br>
      The temperature is ${data.main.temp} with a wind speed of ${data.wind.speed}.</p> 
      <hr>
    `;
    cityInput.value = '';
    })
    .catch(error => { //if there is an error then it will be displayed in the weather info div
        console.log(error)
        weatherInfo.innerHTML=`<p>City not found: ${error.message}</p>`;
        cityInput.value = '';
    });
});