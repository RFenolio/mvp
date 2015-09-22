var TeaListItemView = Backbone.View.extend({

  tag: 'li',

  template: _.template('<li>Tea: <%= tea %> temperature: <%= temperature %> time: <%= time %> seconds</li>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    var entry = this.template({
      tea: this.model.get('name'),
      temperature: this.model.get('temperature'),
      time: this.model.get('time')
    })

    this.$el.html(entry);
    return this.$el;
  },

  clickAction: function () {
    $('body').append('<div id="timer">Your tea will be ready in <span id="time"></span> minutes!</div>');
    var display = document.querySelector('#time');
    console.log(this.model.get('time'));  
    var timer = new CountDownTimer(this.model.get('time'));

    timer.onTick(format(display)).start();

    function format(display) {
      return function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
      };
    }
  }
});


// window.onload = function () {
//     var display1 = document.querySelector('#time1'),
//         display2 = document.querySelector('#time2'),
//         timer1 = new CountDownTimer(5),
//         timer2 = new CountDownTimer(10);

//     timer1.onTick(format(display1)).onTick(restart).start();
//     timer2.onTick(format(display2)).start();

//     function restart() {
//         if (this.expired()) {
//             setTimeout(function () { timer1.start(); }, 1000);
//         }
//     }

//     function format(display) {
//         return function (minutes, seconds) {
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
//             display.textContent = minutes + ':' + seconds;
//         };
//     }
// };