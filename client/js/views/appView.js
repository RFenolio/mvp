var AppView = Backbone.View.extend({
  
  el: '#app',

  initialize: function () {
    this.teas = new TeaListView({
      collection: this.collection
    })
    this.render();
  },

  render: function () {
    this.$el.append(this.teas.el);

    return this;
  }

});