
// stub data
var example = new Tea({
  name: 'example',
  temperature: 190,
  time: 5
});

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
  url: '/teas',
  type: 'GET',
  contentType: 'application/json',
  success: function(data) {
    var teaList = data.map(function (tea) {
      return new Tea(tea);
    });
    var app = new AppView({
      collection: new Teas(teaList, {model: Tea})
    });
  },
  error: function(error) {
    console.log('error from AJAX call: ', error);
    console.error('TeaTime: Failed to fetch teas');
  }
});
