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
      response = JSON.parse(response);
      $('.content .names').html("vehicle names: " + response.names);
      $('.content .average-speed').html("average speed: " + response.average_speed);

      var statusMsg = response.alertMessage ?
        response.alertMessage :
        "";
      $('.status').html(statusMsg);
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
    getVehicleInformation("false");
};

pollServer();
