TrelloVideo.Views.CardShow = Backbone.CompositeView.extend({
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['cards/show'],
  
  render: function(){
    var renderContent = this.template({
      card: this.model
    });
    this.$el.html(renderContent);
    return this;
  },
  
});