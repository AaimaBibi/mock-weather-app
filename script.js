document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value.trim();
  const backgroundContainer = document.querySelector(".weather-container");

  if (city === "") {
    alert("Please enter country/city name!");
    return;
  }

  const mockWeatherData = {
    "New York": { temp: "22°C", humidity: "60%", description: "Sunny ☀️", background: "linear-gradient(to right, #ffcc00, #ff9900)" },
    "London":   { temp: "16°C", humidity: "75%", description: "Cloudy ☁️", background: "linear-gradient(to right, #8e9eab, #eef2f3)" },
    "Tokyo":    { temp: "26°C", humidity: "70%", description: "Rainy 🌧", background: "linear-gradient(to right, #4b79a1, #283e51)" },
    "Paris":    { temp: "20°C", humidity: "65%", description: "Windy 🌬", background: "linear-gradient(to right, #3a7bd5, #3a6073)" },
    "Dubai":    { temp: "35°C", humidity: "50%", description: "Hot 🔥", background: "linear-gradient(to right, #ff7e5f, #feb47b)" },
    "Berlin":   { temp: "18°C", humidity: "80%", description: "Foggy 🌫", background: "linear-gradient(to right, #757f9a, #d7dde8)" },
    "Sydney":   { temp: "28°C", humidity: "55%", description: "Sunny ☀️", background: "linear-gradient(to right, #ffcc00, #ff9900)" },
    "Moscow":   { temp: "-2°C", humidity: "65%", description: "Snowy ❄️", background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }
  };

  if (mockWeatherData[city]) {
    document.getElementById("cityName").textContent = `Weather in ${city}`;
    document.getElementById("temperature").textContent = `Temperature: ${mockWeatherData[city].temp}`;
    document.getElementById("humidity").textContent = `Humidity: ${mockWeatherData[city].humidity}`;
    document.getElementById("description").textContent = `Condition: ${mockWeatherData[city].description}`;
    backgroundContainer.style.background = mockWeatherData[city].background;
  } else {
    document.getElementById("cityName").textContent = `Weather in ${city}`;
    document.getElementById("temperature").textContent = "Temperature: 24°C";
    document.getElementById("humidity").textContent = "Humidity: 65%";
    document.getElementById("description").textContent = "Condition: Partly Cloudy ⛅";
    backgroundContainer.style.background = "linear-gradient(to right, #8e9eab, #eef2f3)";
  }

  // 🌟 CSS transition reveal
  const weatherInfo = document.querySelector(".weather-info");
  weatherInfo.classList.remove("visible");
  setTimeout(() => {
    weatherInfo.classList.add("visible");
  }, 1);
});
