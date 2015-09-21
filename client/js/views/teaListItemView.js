var TeaListItemView = Backbone.View.extend({

  tag: 'li',

  template: _.template('<li>Tea: <%= tea %> temperature: <%= temperature %> time: <%= time %></li>'),

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
  }
});