// Function to fetch weather data using jQuery AJAX
function getWeather(city) {
  var apiKey = "44ac34da321633efb91457128b18ad3a";
  var url = "https://api.openweathermap.org/data/2.5/weather";

  $.ajax({
    url: url,
    method: "GET",
    data: {
      q: city,
      appid: apiKey,
      units: "metric",
    },
    success: function (data) {
      // Extract data
      var cityName = data.name;
      var temp = data.main.temp;
      var description = data.weather[0].description;
      var humidity = data.main.humidity;
      var iconCode = data.weather[0].icon;
      var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      console.log("Weather data: ", data);
      console.log("Weather[0] object: ", data.weather[0]);

      // Display data in HTML
      $("#cityName").text(cityName);
      $("#temp").text(temp);
      $("#description").text(description);
      $("#humidity").text(humidity);
      $("#weatherIcon").attr("src", iconUrl);

      $("#weatherResult").show();
    },
    error: function (xhr) {
      $("#weatherResult").show();
      $("#cityName").text("Error");
      $("#temp").text("");
      $("#description").text("Could not fetch weather data.");
      $("#humidity").text("");
      $("#weatherIcon").attr("src", "");
    },
  });
}

// Trigger function on button click
$(document).ready(function () {
  $("#getWeatherBtn").click(function () {
    var city = $("#cityInput").val();
    if (city.trim() !== "") {
      getWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });
});
