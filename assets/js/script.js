let cities = [];

let weatherForm = document.getElementById("formCity");
let buttons = document.getElementById("buttons");
let cityInput = document.getElementById("city");
let todayDate = document.getElementById("todayDate");

//date display
todayDate.textContent = moment().format("M/DD");
// 5 day Forecast Dates with Moment
document.getElementById("day1").innerHTML = moment().add(1, "d").format("M/DD");
document.getElementById("day2").innerHTML = moment().add(2, "d").format("M/DD");
document.getElementById("day3").innerHTML = moment().add(3, "d").format("M/DD");
document.getElementById("day4").innerHTML = moment().add(4, "d").format("M/DD");
document.getElementById("day5").innerHTML = moment().add(5, "d").format("M/DD");

//OPEN WEATHER CALLS
let TodayWeather = function(city) {
   let apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
   fetch(apiUrl1).then(function(response) {
      response.json().then(function(data) {
         showTodayWeather(data, city);
      });
   });
};
//UV,  must define lat and lon
let lat = data.city.coord.lat;
let lon = data.city.coord.lon;
let getTodayUV = function(city) {
   let apiUrl2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4204bfdd6f4f063ef67429ec56df1142";
   fetch(apiUrl2).then(function(response) {
      response.json().then(function(data) {

         document.getElementById("todayUV").innerHTML = data.value;
         if (data.value <= 3) {
            document.getElementById("todayUV").setAttribute("class", “low);
         } else if (data.value > 3 && data.value <= 7) {
            document.getElementById("todayUV").setAttribute("class", “ok”);
         } else {
            document.getElementById("todayUV").setAttribute("class", “high”);
         };
      });
   });
};
getTodayUV();

let getForecast = function(city) {
      let apiUrl3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
      fetch(apiUrl3).then(function(response) {
               showForecast(data, city);
            }

            let submitQuery = function(event) {
               event.preventDefault(); //tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
               let cityName = cityInput.value.trim();
               let buttonHistory = document.createElement("button"); //create buttons for past searches
               buttonHistory.className = "history-buttons btn btn-default"; //saving as buttons seems to be easiest
               buttonHistory.innerHTML = cityName;
               cityButtons.appendChild(buttonHistory);
               getCities();
               if (!cities.includes(cityName) && (cityName != "")) {
                  cities.push(cityName);
               };
               localStorage.setItem("cities", JSON.stringify(cities)); //keep searches to build searched city list
               if (cityName) {
                  cityInput.value = "";
                  getTodayWeather(cityName);
                  getForecast(cityName);

               } else {
                  alert("Enter a city name to get the weather!");
               }
            };

            //getTodayWeather + showTodayWeather
            //today's weather
            let showTodayWeather = function(weather, searchQuery) {
                  cityName.textContent = searchQuery;
                  iconItem = weather.weather[0] icon;
                  document.getElementById("todayIcon").src = "https://openweathermap.org/img/w/" + iconItem + ".png";
                  document.getElementById("todayTemp").innerHTML = weather.main.temp
                  document.getElementById("todayHumidity").innerHTML = weather.main.humidity;
                  document.getElementById("todayUV").innerHTML = //additional API query needed */
                     // UV add in classification with CSS 

                     //5 Day Forecast Display Items
                     var showForecast = function(forecast, searchQuery) {
                           cityName.textContent = searchQuery;
                           // 1 of 5
                           document.getElementById("temperature1").innerHTML = forecast.list[x].main.temp;
                           document.getElementById("humidity1).innerHTML = forecast.list[x].main.humidity;
                                 // icon related 1
                                 iconItem = forecast.list[1].weather[0].icon; document.getElementById("icon1").src = "https://openweathermap.org/img/w/" + iconItem + ".png"; document.getElementById("icon1").setAttribute("alt", "weather-icon")

                                 //2 of 5
                                 document.getElementById("temperature2").innerHTML = forecast.list[x].main.temp; document.getElementById("humidity2).innerHTML = forecast.list[x].main.humidity;
                                    // icon related 2
                                    iconItem = forecast.list[x].weather[0].icon; document.getElementById("icon2").src = "https://openweathermap.org/img/w/" + iconItem + ".png"; document.getElementById("icon2").setAttribute("alt", "weather-icon")

                                    //3 of 5
                                    document.getElementById("temperature3").innerHTML = forecast.list[x].main.temp; document.getElementById("humidity3).innerHTML = forecast.list[x].main.humidity;
                                       // icon related 3
                                       iconItem = forecast.list[x].weather[0].icon; document.getElementById("icon3").src = "https://openweathermap.org/img/w/" + iconItem + ".png"; document.getElementById("icon3").setAttribute("alt", "weather-icon")

                                       //4 of 5
                                       document.getElementById("temperature4").innerHTML = forecast.list[x].main.temp; document.getElementById("humidity4).innerHTML = forecast.list[x].main.humidity;
                                          // icon related 4
                                          iconItem = forecast.list[x].weather[0].icon; document.getElementById("icon4").src = "https://openweathermap.org/img/w/" + iconItem + ".png"; document.getElementById("icon4").setAttribute("alt", "weather-icon")

                                          // 5 of 5
                                          document.getElementById("temperature5").innerHTML = forecast.list[x].main.temp; document.getElementById("humidity5).innerHTML = forecast.list[x].main.humidity;
                                             // icon related 5
                                             iconItem = forecast.list[x].weather[0].icon; document.getElementById("icon5").src = "https://openweathermap.org/img/w/" + iconItem + ".png"; document.getElementById("icon5").setAttribute("alt", "weather-icon")

                                          };

                                          //past search history requery option

                                          let createButtonHistory = function {
                                             for
                                             var i = 0;
                                             i < cities.length;
                                             i++)[
                                             var buttonHistory = document.createElement("button"); buttonHistory.className = "history-buttons btn btn-default"
                                             buttonHistory.innerHTML = cities[i] buttons.appendChild(buttonHistory)
                                          };

                                          let cityButtons = document.querySelectorAll(".history-buttons");
                                          for (var i = 0; i < cityButtons.length; i++) {
                                             cityButtons[i].addEventListener("click", function(event) {
                                                getTodayWeather(event.target.textContent);
                                                getForecast(event.target.textContent);
                                             })
                                          }
                                       };

                                       weatherForm.addEventListener("submit", submitQuery);

                                       // Event Listeners