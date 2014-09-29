TrelloVideo.Views.ItemShow = Backbone.CompositeView.extend({
  template: JST['items/show'],
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
  },
  
  event:{
    "click .itemCheckbox":"editDone"
  },
  
  editDone: function(){
    
  },
  
  render: function(){
    var renderContent = this.template({
      item: this.model
    });
    this.$el.html(renderContent);
    return this;
  },
  

});