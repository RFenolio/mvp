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
