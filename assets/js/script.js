

// DEFINE
let cities = [];
let cityName = document.querySelector("#searchedCity");
let todayDate = document.getElementById("todayDate");
let weatherForm = document.getElementById("formCity");
let buttons = document.getElementById("buttons");
let cityInput = document.getElementById("city");

// DATES
todayDate.textContent = moment().format("M/DD/YYYY");
document.getElementById("day1").innerHTML = moment().add(1, "d").format("M/DD/YYYY");
document.getElementById("day2").innerHTML = moment().add(2, "d").format("M/DD/YYYY");
document.getElementById("day3").innerHTML = moment().add(3, "d").format("M/DD/YYYY");
document.getElementById("day4").innerHTML = moment().add(4, "d").format("M/DD/YYYY");
document.getElementById("day5").innerHTML = moment().add(5, "d").format("M/DD/YYYY");

// PAST CITY SEARCHES
let pastCity = () => {
    cities = JSON.parse(localStorage.getItem("cities"));
    if (!cities) {
        cities = [];
    };
};

// GET WEATHER FOR TODAY DISPLAY
// My API Key: 4204bfdd6f4f063ef67429ec56df1142
let getWeather = (city) => {
  let apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
  fetch(apiUrl1).then(function(response) {
    response.json().then(function(data) {
      showWeather(data, city);
    });
  });
};

// GET 5-DAY FORECAST + UV DATA
let getForecast = (city) => {
  let apiUrl3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
  fetch(apiUrl3).then((response) => {
    response.json().then((data) => {
      showForecast(data, city);
      let lat = data.city.coord.lat;
      let lon = data.city.coord.lon;
      let getTodayUV = (city) => {
        let apiUrl2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4204bfdd6f4f063ef67429ec56df1142";
        fetch(apiUrl2).then((response) => {
          response.json().then((data) => {
            document.getElementById("todayUV").innerHTML = data.value;
            if(data.value <= 3) {
              document.getElementById("todayUV").setAttribute("class", "favorableLevel");
            } else if(data.value > 3 && data.value <= 7) {
              document.getElementById("todayUV").setAttribute("class", "moderateLevel");
            } else {
              document.getElementById("todayUV").setAttribute("class", "severeLevel");
            };
          });
        });
      };
      getTodayUV();
    });
  });
};
// SUBMIT CITY SEARCH
let submitQuery = (event) => {
  event.preventDefault();
  let cityName = cityInput.value.trim();
  let btn = document.createElement("button");
  btn.className = "button-list btn";
  btn.innerHTML = cityName;
  buttons.appendChild(btn);
  pastCity();
  if(!cities.includes(cityName) && (cityName != "")) {
    cities.push(cityName);
  };
  localStorage.setItem("cities", JSON.stringify(cities));
  if(cityName) {
    getWeather(cityName);
    getForecast(cityName);
    cityInput.value = "";
  } else {
    alert("Enter a city name to get the weather!");
  }
};

// DISPLAY TODAY WEATHER
let showWeather = (weather, searchQuery) => {
  cityName.textContent = searchQuery;
  iconEl = weather.weather[0].icon;
  document.getElementById("todayIcon").src = "https://openweathermap.org/img/w/" + iconEl + ".png";
  document.getElementById("todayTemp").innerHTML = weather.main.temp;
  document.getElementById("todayHumidity").innerHTML = weather.main.humidity;
  document.getElementById("todayWind").innerHTML = weather.wind.speed;
};

// DISPLAY 5 DAY FORECAST
let showForecast = (forecast, searchQuery) => {
  cityName.textContent = searchQuery;
  // 1 of 5
  document.getElementById("t1").innerHTML = forecast.list[1].main.temp;
  document.getElementById("h1").innerHTML = forecast.list[1].main.humidity;
  iconEl1 = forecast.list[1].weather[0].icon;
  document.getElementById("i1").src = "https://openweathermap.org/img/w/" + iconEl1 + ".png";
  // 2 of 5
  document.getElementById("t2").innerHTML = forecast.list[9].main.temp;
  document.getElementById("h2").innerHTML = forecast.list[9].main.humidity;
  iconEl2 = forecast.list[9].weather[0].icon;
  document.getElementById("i2").src = "https://openweathermap.org/img/w/" + iconEl2 + ".png";
  // 3 of 5
  document.getElementById("t3").innerHTML = forecast.list[17].main.temp;
  document.getElementById("h3").innerHTML = forecast.list[17].main.humidity;
  iconEl3 = forecast.list[17].weather[0].icon;
  document.getElementById("i3").src = "https://openweathermap.org/img/w/" + iconEl3 + ".png";
  // 4 of 5
  document.getElementById("t4").innerHTML = forecast.list[25].main.temp;
  document.getElementById("h4").innerHTML = forecast.list[25].main.humidity;
  iconEl4 = forecast.list[25].weather[0].icon;
  document.getElementById("i4").src = "https://openweathermap.org/img/w/" + iconEl4 + ".png";
  // 5 of 5
  document.getElementById("t5").innerHTML = forecast.list[33].main.temp;
  document.getElementById("h5").innerHTML = forecast.list[33].main.humidity;
  iconEl5 = forecast.list[33].weather[0].icon;
  document.getElementById("i5").src = "https://openweathermap.org/img/w/" + iconEl5 + ".png";
};

// ADD BUTTONS TO SEARCH HISTORY
let addList = () => {
  for(var i = 0; i < cities.length; i++) {
    let btn = document.createElement("button");
    btn.className = "button-list btn";
    btn.innerHTML = cities[i];
    buttons.appendChild(btn);
  };
  
  // USE PAST SEARCH BUTTON
  let cityButtons = document.querySelectorAll(".button-list");
  for(var i = 0; i < cityButtons.length; i++) {
    cityButtons[i].addEventListener("click", (event) => {
      getWeather(event.target.textContent);
      getForecast(event.target.textContent);
    })
  }
};
// LISTEN FOR CITY FORM SUBMISSION, SUBMIT TO API
weatherForm.addEventListener("submit", submitQuery);
pastCity();
addList();
getWeather("Berkeley");
getForecast("Berkeley");