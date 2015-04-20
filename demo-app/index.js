var url = '/examples/rpc';
$.ajax({
  type: 'GET',
  url: url,
  contentType: 'text/plain',
  xhrFields: {
    withCredentials: false
  },
  success: function(response) {
    console.log(response);
  }
});

var $info = $('.info');
var pollServer = function() {
  setInterval(function() {
    console.log('polled');
  }, 5000);
};

var postBtn = document.querySelector('.post-button');

var trigger = false;

postBtn.addEventListener('click', function(e) {
  var name    = document.querySelector('#name').value;
  var speed   = document.querySelector('#speed').value;

  $.ajax({
    type: 'POST',
    url: url,
    data: {
      'name': name,
      'speed': speed
    },
    xhrFields: {
      withCredentials: false
    },
    success: function(response) {
      console.log(response);
      if (!trigger) {
        trigger = true;
        pollServer();
      }
    }
  });
});
