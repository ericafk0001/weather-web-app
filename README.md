# Weather App

A responsive and interactive weather application that fetches real-time weather data for a user-specified city and allows users to toggle between Fahrenheit and Celsius. The app is designed to offer an intuitive user experience across various screen sizes.

## Features

- **Real-Time Weather Data**: Fetches current weather details such as temperature, humidity, and description from the OpenWeatherMap API.
- **Unit Conversion**: Allows users to toggle between Fahrenheit and Celsius for temperature display.
- **Responsive Design**: Utilizes media queries to ensure optimal display on different screen sizes, adapting the layout for both mobile and desktop views.
  - On smaller screens, the temperature toggle is simplified to display just the unit (e.g., °F or °C).
  - On larger screens, the toggle button is more descriptive, showing "Switch to °C" or "Switch to °F".
- **Weather Emojis**: Displays appropriate weather emoji based on the weather condition using the weather API’s ID (e.g., 🌧️ for rain, ☀️ for clear skies).
- **Error Handling**: Gracefully handles errors with informative messages when the user inputs an invalid city or if the API call fails.

## Technologies Used

- JavaScript (ES6+)
- HTML5
- CSS3
- OpenWeatherMap API

## How It Works

1. **Weather Form Submission**: The user enters a city name, and the app fetches the weather data for that city via the OpenWeatherMap API.
2. **Temperature Conversion**: The user can toggle between Fahrenheit and Celsius. The temperature is dynamically updated based on the selected unit.
3. **Responsive Layout**: The app adjusts its layout based on the screen size:
   - On smaller devices, the toggle button shows just the unit (°C or °F), ensuring easy access.
   - On larger devices, the button displays the full conversion description ("Switch to °C" or "Switch to °F").
4. **Dynamic Content**: The app dynamically injects weather data, including city name, temperature, humidity, description, and an emoji representing the weather condition.

## Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd python-textbased-choice-game
   ```
3. Run the `index.html` file

## Demo

[website demo](https://ericafk0001.github.io/weather-web-app/) |
[video demo](https://youtu.be/8hRi7gEnDJs)

## Screenshots

![image](https://cloud-3gto30eoq-hack-club-bot.vercel.app/0image.png)
