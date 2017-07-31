//creating a Calculator with "pretty looking skins" - and ability to perform the ping-pong game
//

//creating a Constructor
function Calculator(skinName){
  this.skin = skinName;
}

//pingPong() - a method of Calculator Object
//goal - our input number for ping-pong
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
//Node comes. We export the blueprint of our Calculator objects by turning it //into a Node module - Calculator is now available for Node

exports.calculatorModule = Calculator;

//exports is provided by Note ant lets us to export things from one file and //bring them into another.
//Export - a giant, global JacaScript object. We are creating a new property //on it - calculatorModule and we are setting this property equal to uor //Calculator constructor function.

/*function pingPong(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}*/


/*UI logic moved to pingpong-interface.js

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});*/
