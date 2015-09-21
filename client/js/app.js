
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

var app = new AppView({
  collection: new Teas([green, black, oolong], {model: Tea})
});