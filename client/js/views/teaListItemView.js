var TeaListItemView = Backbone.View.extend({

  tag: 'li',

  template: _.template('<li><p class="teaName"><%= tea %></p><p class="teaInfo">Temp: <%= temperature %>, Time: <%= time %> seconds</p></li>'),

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
    $('#timer').remove();
    $('#app').prepend('<div id="timer">Enjoy your tea in <span id="time"></span> minutes!</div>');
    var display = document.querySelector('#time');
    var timer = new CountDownTimer(this.model.get('time'));
    var finished = function () {
      if (this.expired()) {
        alert("Your tea is ready!");
        $('#timer').remove();
      }
    };

    var format = function (display) {
      return function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
      };
    }

    timer.onTick(format(display)).onTick(finished).start();

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