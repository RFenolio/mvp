
// stub data
var green = new Tea({
  name: 'green',
  temperature: 180,
  time: 120
});

var black = new Tea({
  name: 'black',
  temperature: 212,
  time: 300
})

var oolong = new Tea({
  name: 'oolong',
  temperature: 212,
  time: 250
})


app = {
  server: 'localhost:8000'
};

$.ajax({
  url: app.server,
  type: 'GET',
  contentType: 'application/json',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log(error);
    console.error('TeaTime: Failed to fetch teas');
  }
});

var app = new AppView({
  collection: new Teas([green, black, oolong], {model: Tea})
});