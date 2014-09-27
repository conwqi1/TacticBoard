TrelloVideo.Views.ItemShow = Backbone.CompositeView.extend({
  template: JST['items/show'],
  
  // initialize: function(){
  //   this.collection = this.model.items();
  //   this.listenTo(this.collection, 'sync add destroy', this.render)
  // },
  
  render: function(){
    var renderContent = this.template({
      item: this.model
    });
    this.$el.html(renderContent);
    return this;
  },
  

});