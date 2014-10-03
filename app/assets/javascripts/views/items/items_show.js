TrelloVideo.Views.ItemShow = Backbone.CompositeView.extend({
  className: "content-container-item list-group-item",
  tagName: "li",
  attributes: function(){
    return {"data-card-id": this.model.id}
  },
  template: JST['items/show'],
  initialize: function(){
    this.colletion
    this.listenTo(this.model, 'sync', this.render)
  },
  
  events: {
    "click .itemCheckbox" : "editDone",
    "click .deleteItem" : "deleteItem"
  },
  
  editDone: function(event){
    event.preventDefault();
    this.model.set('done', !this.model.get('done'));
    this.model.save();
  },
  
  deleteItem: function(event){
    this.model.destroy();
  },
  
  render: function(){
    var renderContent = this.template({
      item: this.model
    });
    this.$el.html(renderContent);
    return this;
  },
  

});