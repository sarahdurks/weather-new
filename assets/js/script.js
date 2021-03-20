//OPEN WEATHER CALLS
letTodayWeather = function(city) {
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



/*.high {
    padding: 4px;
    background-color: rgb(175, 30, 14);
    color: white;
    border-radius: 5px;
  }
.OK {
    padding: 4px;
    background-color: goldenrod;
    border-radius: 5px;
  }
  
.low {
    padding: 4px;
    background-color: rgb(21, 147, 21);
    color: white;
    border-radius: 5px;
  }*/
// 5 day forecast
let getForecast = function(city) {
		let apiUrl3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";
		fetch(apiUrl3).then(function(response) {
					showForecast(data, city);
				}




				// main form
				formCity
				let cityButtons = document.getElementById("cityButtons");
				let cityInput = document.getElementById("city"); weather - today searchedCity

				let todayDate = document.getElementById("todayDate"); todayDate.textContent = moment().format("M/DD");


				let submitQuery = function(event) {
					event.preventDefault(); //tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
					let cityName = cityInput.value.trim();
					let buttonHistory = document.createElement("button"); //create buttons for past searches
					buttonHistory.className = "history-buttons btn btn-default"; //saving as buttons seems to be easiest
					buttonHistory.innerHTML = cityName;
					buttonHistory.appendChild(buttonHistory);
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

							//dates for 5 day forecast
							document.getElementById("day1").innerHTML = moment().add(1, "d").format("M/DD");
						document.getElementById("day2").innerHTML = moment().add(2, "d").format("M/DD");
						document.getElementById("day3").innerHTML = moment().add(3, "d").format("M/DD");
						document.getElementById("day4").innerHTML = moment().add(4, "d").format("M/DD");
						document.getElementById("day5").innerHTML = moment().add(5, "d").format("M/DD");

						// populate forecast5day container
						/*
						//getForecast + showForecast
						Need function to get and populate 5 day forecast
						    //1
						    document.getElementById("temperature1").innerHTML = 
						    document.getElementById("humidity1).innerHTML = 
						    icon1?
						    //2
						    document.getElementById("temperature2").innerHTML = 
						    document.getElementById("humidity2).innerHTML =
						    icon2?
						    //3
						    document.getElementById("temperature3").innerHTML = 
						    document.getElementById("humidity3).innerHTML =
						    icon3?
						    //4
						    document.getElementById("temperature4").innerHTML = 
						    document.getElementById("humidity4).innerHTML =
						    icon4?
						    //5
						    document.getElementById("temperature5").innerHTML = 
						    document.getElementById("humidity5).innerHTML =
						    icon5?


						*/




						// add event listeners last because they break everything if wrong