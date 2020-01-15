// Variables

var cups = function(num) {
  return num;
};

var ounces = function(cups) {
  return cups * 8;
};

var tablespoons = function(cups) {
  return cups * 16;
}

var teaspoons = function(cups) {
  return cups * 48;
}

var milli = function(cups) {
  return cups * 250;
}



// jQuery

$(document).ready(function() {

  $("form#cup").submit(function(event) {
    event.preventDefault();

    var num = parseInt($("#cupInput").val());
    var result = cups(num);
    console.log(result);
    $("#outputCup").text(result);
  });

  $("form#oz").submit(function(event) {
    event.preventDefault();

    var num = parseInt($("#ozInput").val());
    var result = ounces(cups(num));
    console.log(result);
    $("#outputOz").text(result);
  });

  $("form#tbsp").submit(function(event) {
    event.preventDefault();

    var num = parseInt($("#tbspInput").val());
    var result = tablespoons(cups(num));
    console.log(result);
    $("#outputTbsp").text(result);
  });

  $("form#tsp").submit(function(event) {
    event.preventDefault();

    var num = parseInt($("#tspInput").val());
    var result = teaspoons(cups(num));
    console.log(result);
    $("#outputTsp").text(result);
  });

  $("form#mil").submit(function(event) {
    event.preventDefault();

    var num = parseInt($("#milInput").val());
    var result = milliliters(cups(num));
    console.log(result);
    $("#outputMil").text(result);
  });
  

});
