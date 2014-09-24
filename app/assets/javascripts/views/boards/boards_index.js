TrelloVideo.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  //add stuff in initialize in future to render more css
  
  className: 'boards-index',
  
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  
  render: function(){
    var renderContent = this.template({
      boards: this.collection
    });
    this.$el.html(renderContent);
    return this;
  },
  
});