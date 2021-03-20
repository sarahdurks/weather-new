//OPEN WEATHER CALLS
// today weather
let apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";

//UV,  must define lat and lon
            var lat = data.city.coord.lat;
            var lon = data.city.coord.lon;
         
let apiUrl2 = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=4204bfdd6f4f063ef67429ec56df1142";

// 5 day forecast
 let apiUrl3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=4204bfdd6f4f063ef67429ec56df1142";



          



// main form
formCity


// city searched by user
let cityInput = document.getElementById("city");
 // past city searches
let cityButtons = document.getElementById("cityButtons");

// city searched by user
let cityInput = document.getElementById("city");


//today weather container
weather-today


searchedCity


let todayDate = document.getElementById("todayDate");
todayDate.textContent = moment().format("M/DD");

/* today forecast information
  document.getElementById("todayIcon").src = 
    document.getElementById("todayTemp").innerHTML = 
    document.getElementById("todayHumidity").innerHTML = 
    document.getElementById("todayUV").innerHTML = */
// UV add in classification with CSS 

    //dates for 5 day forecast
document.getElementById("day1").innerHTML = moment().add(1, "d").format("M/DD");
document.getElementById("day2").innerHTML = moment().add(2, "d").format("M/DD");
document.getElementById("day3").innerHTML = moment().add(3, "d").format("M/DD");
document.getElementById("day4").innerHTML = moment().add(4, "d").format("M/DD");
document.getElementById("day5").innerHTML = moment().add(5, "d").format("M/DD");

// populate forecast5day container
/*

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



//Forecast 5 container
forecast5day
  
    
// add event listeners last because they break everything if wrong