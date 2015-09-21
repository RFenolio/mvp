var tea = Backbone.Model.extend({
  
  initialize: function () {
    console.log('This model was initialized');
  }

  defaults: {
    tea: '',
    temperature: 100,
    time: 0
  }
})