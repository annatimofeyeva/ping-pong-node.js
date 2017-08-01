var apiKey = "4482eb798ce5a8462165873ffe2e0dff";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response) {
         $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      });
   });
});

//refuctoring code

/*
$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    //$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      //$('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");

      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
        console.log("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: The GET request has been made.");
  });
}); */
