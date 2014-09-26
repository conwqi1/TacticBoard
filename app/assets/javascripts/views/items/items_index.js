TrelloVideo.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],
  
  initialize: function(){
    this.collection = this.model.items();
    this.listenTo(this.collection, 'sync add destroy', this.render)
  },
  
  render: function(){
    var renderContent = this.template({
      items: this.collection
    });
    this.$el.html(renderContent);
    return this;
  },
  

});