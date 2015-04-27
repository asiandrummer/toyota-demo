var url = '/examples/rpc';
var $content = $('.content');
var getVehicleInformation = function(alertPressed) {
  var MAX_SPEED = 80;
  var MIN_SPEED = 40;
  var $userSpeedContainer =
    document.querySelector(".user-speed-container");
  var randSpeed = Math.floor
    (Math.random() * (MAX_SPEED - MIN_SPEED)) + MIN_SPEED;

  var promise = $.ajax({
    type: 'POST',
    url: url,
    dataType: 'text',
    xhrFields: {
      withCredentials: false
    },
    data: randSpeed + "," + alertPressed,
    success: function(response) {
      console.log(response);
      response = JSON.parse(response);
      $('.content .names').html("vehicle names: " + response.names);
      $('.content .average-speed').html("average speed: " + response.average_speed);
      if (response.hasAlert == "true") {
        response.alertMessage && $('.status').html(response.alertMessage);
      }
    },
    error: function(response, t, e) {
      console.log(e);
    }
  });
};

$('.panic-button').click(function(e) {
  getVehicleInformation("true");
});

getVehicleInformation("false");

var pollServer = function() {
  setInterval(function() {
    getVehicleInformation("false");
  }, 1000);
};

pollServer();
