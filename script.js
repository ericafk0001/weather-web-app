const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
const toggleButton = document.querySelector(".toggle-convert");
const apiKey = "98809575035e7d74e62b71d239fb1e98";

let currentUnit = "F";
let currentTemp = 0;
let tempDisplay

const toCelsius = (kelvin) => kelvin - 273.15;
const toFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;

function updateTemperatureDisplay(temp, unit) {
  let displayTemp;

  if (unit === "F") {
    displayTemp = toFahrenheit(temp).toFixed(1);
  } else if (unit === "C") {
    displayTemp = toCelsius(temp).toFixed(1);
  }
  if (tempDisplay) {
    tempDisplay.textContent = `${displayTemp}°${unit}`;
  }
};

toggleButton.addEventListener("click", () => {
  currentUnit = currentUnit === "F" ? "C" : "F";
  toggleButton.textContent = `Switch to °${currentUnit === "F" ? "C" : "F"}`;
  updateTemperatureDisplay(currentTemp, currentUnit);
});



weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Error: Please enter a city!");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      "Could not fetch weather data :( Did you input a real city?"
    );
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  currentTemp = temp;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  updateTemperatureDisplay(temp, currentUnit);
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getweatherEmoji(id);

  cityDisplay.classList.add("city-display");
  tempDisplay.classList.add("temp-display");
  humidityDisplay.classList.add("humidity-display");
  descDisplay.classList.add("desc-display");
  weatherEmoji.classList.add("weather-emoji");

  const tempValue = parseFloat(tempDisplay.textContent.slice(0, -2));
  if (tempValue < 50) {
    tempDisplay.style.color = "#1999e3";
  } else if (tempValue >= 50 && tempValue <= 80) {
    tempDisplay.style.color = "#e69812";
  } else {
    tempDisplay.style.color = "#de2410";
  }

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getweatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❔";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
