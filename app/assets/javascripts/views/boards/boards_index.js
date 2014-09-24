TrelloVideo.Views.BoardIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  //add initialize in future to render more css
  
  render: function(){
    var content = this.template({
      boards: this.collection
    });
    this.$el.html(content)
    return this;
  },
  
});