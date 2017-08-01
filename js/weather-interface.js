var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response){
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
     })

     .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});

//refactoring code with fail()
/*
$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response) {
         $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      });
   });
});*?

//refuctoring code - then()

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
