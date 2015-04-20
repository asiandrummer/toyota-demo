var url = '/examples/rpc';
var $content = $('.content');
var getVehicleInformation = function() {
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json',
    xhrFields: {
      withCredentials: false
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
    getVehicleInformation();
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
