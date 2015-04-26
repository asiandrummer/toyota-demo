var url = '/examples/rpc';
var $content = $('.content');
var getVehicleInformation = function() {
  var MAX_SPEED = 80;
  var MIN_SPEED = 40;
  var $userSpeedContainer =
    document.querySelector(".user-speed-container");
  var randSpeed = Math.floor
    (Math.random() * (MAX_SPEED - MIN_SPEED)) + MIN_SPEED;

  $.ajax({
    type: 'POST',
    url: url,
    xhrFields: {
      withCredentials: false
    },
    data: {
      'speed': randSpeed
    },
    success: function(response) {
      $('.content .names').html("Vehicle Names: " + response.names);
      $('.content .average-speed').html("Average Speed: " + response.average_speed);
    }
  });
};

getVehicleInformation();

var pollServer = function() {
  setInterval(function() {
    //getVehicleInformation();
  }, 1000);
};

pollServer();

var postBtn = $('.post-button');

var trigger = false;

postBtn.addEventListener('click', function(e) {
  $.ajax({
    type: 'POST',
    url: url,
    success: function(response) {
      console.log(response);
    }
  });
});
