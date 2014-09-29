TrelloVideo.Views.ItemShow = Backbone.CompositeView.extend({
  template: JST['items/show'],
  initialize: function(){
    this.listenTo(this.model, 'sync add remove', this.render)
  },
  
  events: {
    "click .itemCheckbox" : "editDone",
    "click .deleteItem" : "deleteItem"
  },
  
  editDone: function(event){
    event.preventDefault();
    if (this.model.escape("done") === true){
      this.model.set({"done": false})
    }else{
      this.model.set({"done": true})
    }
    var test = this.model.escape("done");
  },
  
  deleteItem: function(event){
    this.model.destroy();
  },
  
  render: function(){
    var renderContent = this.template({
      item: this.model
    });
    this.$el.html(renderContent);
    window.i = this;
    return this;
  },
  

});