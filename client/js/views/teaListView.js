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
      console.log("Tea in TeaListView: ", tea);
      return tea; 
    });
    console.log("TeaListView collection:", this.collection);  
    console.log("TeaListView this.entries: ", this.entries);

    var $els = this.entries.map(function(entry) {
      console.log('entry: ', entry);
      return new TeaView({entry});
    });
    console.log("$els: ", $els);
    this.$el.append($els);

    return this;
  }
})