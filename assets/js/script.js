let cities = [];
let cityName = document.querySelector("#searchedCity");
let weatherForm = document.getElementById("formCity");
let buttons = document.getElementById("buttons");
let cityInput = document.getElementById("city");
let todayDate = document.getElementById("todayDate");

// Display Today's & Forecast Date
todayDate.textContent = moment().format("M/DD");
document.getElementById("day1").innerHTML = moment().add(1, "d").format("M/DD");
document.getElementById("day2").innerHTML = moment().add(2, "d").format("M/DD");
document.getElementById("day3").innerHTML = moment().add(3, "d").format("M/DD");
document.getElementById("day4").innerHTML = moment().add(4, "d").format("M/DD");
document.getElementById("day5").innerHTML = moment().add(5, "d").format("M/DD");

// populate left rail with history of city search buttons if in local storage
let pastCities = function()
{cities = JSON.parse(localStorage.getItem("cities"));
   if (!cities)
   {cities = []
   };
};

// Get weather for main display
// My API Key: 4204bfdd6f4f063ef67429ec56df1142
let getTodayWeather = function(city)
{let apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
   fetch(apiUrl1)
      .then(function(response)
      {response.json()
            .then(function(data)
            {showTodayWeather(data, city);
            });
      });
};

// Get weather for 5-Day foercast
let getForecast = function(city)
{let apiUrl3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
fetch(apiUrl3)
   .then(function(response)
   { showForecast(data, city);
      // Get UV Data
      let lat = data.city.coord.lat;
      let lon = data.city.coord.lon;
      let getTodayUV = function(city)
      {let apiUrl2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4204bfdd6f4f063ef67429ec56df1142";
         fetch(apiUrl2)
            .then(function(response)
            {response.json()
                  .then(function(data)
                  {document.getElementById("todayUV")
                        .innerHTML = data.value;
                     if (data.value <= 3)
                     {document.getElementById("todayUV").setAttribute("class", "low");}
                     else if (data.value > 3 && data.value <= 7)
                     { document.getElementById("todayUV").setAttribute("class", "ok");}
                     else
                     { document.getElementById("todayUV").setAttribute("class", "high");
                     };
                  });
            });
      };
      getTodayUV();
   });
};

// SUBMIT city search function
// // trigger today's weather and 5 day forecast
// // store (past) city search as button
let submitQuery = function(event)
{
   event.preventDefault();
   let cityName = cityInput.value.trim();
   let buttonHistory = document.createElement("button");
   buttonHistory.className = "history-buttons btn btn-default";
   buttonHistory.innerHTML = cityName;
   cityButtons.appendChild(buttonHistory);

   pastCities();
   if (!cities.includes(cityName) && (cityName != ""))
   {cities.push(cityName);};
   localStorage.setItem("cities", JSON.stringify(cities));
   
   if (cityName)
   {cityInput.value = "";
      getTodayWeather(cityName);
      getForecast(cityName);
   }
   else
   {alert("Enter a city name to get the weather!");
   }
};

//getTodayWeather >> showTodayWeather
let showTodayWeather = function(weather, searchQuery)
{
   cityName.textContent = searchQuery;
   iconEl = weather.weather[0].icon;
   document.getElementById("todayIcon").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
   document.getElementById("todayTemp").innerHTML = weather.main.temp
   document.getElementById("todayHumidity").innerHTML = weather.main.humidity;
};
// getForecast >> showForecast
// populates 5 day container
   let showForecast = function(forecast, searchQuery){
      cityName.textContent = searchQuery;
      // 1 of 5
      document.getElementById("temperature1").innerHTML = forecast.list[1].main.temp;
      document.getElementById("humidity1").innerHTML = forecast.list[1].main.humidity;
      // icon related day 1
       iconEl = forecast.list[1].weather[0].icon;
         document.getElementById("icon1").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
         document.getElementById("icon1").setAttribute("alt", "weather-icon")
      
      // 2 of 5
      document.getElementById("temperature2").innerHTML = forecast.list[9].main.temp;
      document.getElementById("humidity2").innerHTML = forecast.list[9].main.humidity;
      // icon related day 2
       iconEl = forecast.list[9].weather[0].icon;
         document.getElementById("icon2").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
         document.getElementById("icon2").setAttribute("alt", "weather-icon")
      
      // 3 of 5
      document.getElementById("temperature3").innerHTML = forecast.list[17].main.temp;
      document.getElementById("humidity3").innerHTML = forecast.list[17].main.humidity;
      // icon related day 3
       iconEl = forecast.list[x].weather[17].icon; 
         document.getElementById("icon3").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
         document.getElementById("icon3").setAttribute("alt", "weather-icon")
      
      // 4 of 5
      document.getElementById("temperature4").innerHTML = forecast.list[25].main.temp;
      document.getElementById("humidity4").innerHTML = forecast.list[25].main.humidity;
      // icon related day 4
       iconEl = forecast.list[25].weather[0].icon;
         document.getElementById("icon4").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
         document.getElementById("icon4").setAttribute("alt", "weather-icon")
      
      // 5 of 5
      document.getElementById("temperature5").innerHTML = forecast.list[33].main.temp;
      document.getElementById("humidity5").innerHTML = forecast.list[33].main.humidity;
      // icon related day 5
       iconEl = forecast.list[33].weather[0].icon;
         document.getElementById("icon5").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
         document.getElementById("icon5").setAttribute("alt", "weather-icon")
   };
   //past search history requery option
   let createButtonHistory = function(){
      for (var i = 0;i < cities.length;i++) {
      let buttonHistory = document.createElement("button"); 
      
      buttonHistory.className = "history-buttons btn btn-default"
      buttonHistory.innerHTML = cities[i] 
      buttons.appendChild(buttonHistory);
   };
   //past search history list
   let cityButtons = document.querySelectorAll(".history-buttons");
   for (var i = 0; i < cityButtons.length; i++)
   {cityButtons[i].addEventListener("click", function(event)
      {
         getTodayWeather(event.target.textContent);
         getForecast(event.target.textContent);
      })
   }
};
weatherForm.addEventListener("submit", submitQuery);
//load w data
createButtonHistory;
pastCities;
getTodayWeather("Oakland");
getForecast("Oakland");
