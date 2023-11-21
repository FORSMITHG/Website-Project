document.addEventListener('DOMContentLoaded', fetchWeather);

function fetchWeather() {
    const cities = ['London', 'Paris', 'Berlin']; // Add more cities as needed
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    cities.forEach(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayWeather(city, data))
            .catch(error => console.error(`Error fetching weather for ${city}:`, error));
    });
}

function displayWeather(city, data) {
    const forecastContainer = document.getElementById('forecast');

    const cityElement = document.createElement('div');
    cityElement.classList.add('city');
    cityElement.textContent = city;
    forecastContainer.appendChild(cityElement);

    const temperatureElement = document.createElement('div');
    temperatureElement.classList.add('temperature');
    temperatureElement.textContent = `${data.main.temp}°C`;
    forecastContainer.appendChild(temperatureElement);
}
