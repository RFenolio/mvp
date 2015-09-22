var TeaListView = Backbone.View.extend({

  tagName: 'ul',
  id: 'teaList',

  initialize: function () {
    this.render();
  },

  render: function() {

    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      
      var tea = new Tea(model);
      return tea; 
    });

    var context = this;
    this.entries.forEach(function (entry) {
      var newTea = new TeaListItemView({model:entry.attributes});
      context.$el.append(newTea.$el); 
    })

    return this;
  }
})