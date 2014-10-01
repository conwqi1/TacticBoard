TrelloVideo.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  className: "content-container-boards",
  initialize: function(){
    this.listenTo(this.collection, 'sync add destroy', this.render);
  },
  
  render: function(){
    var renderContent = this.template({
      boards: this.collection
    });
    this.$el.html(renderContent);
    this.$('.boards-container').sortable();
    return this;
  },
  
  events: {
    "submit #createBoard": "addBoard",
    "click #delete_board":"deleteBoard"
  },
  
  addBoard: function(event){
    event.preventDefault();
    event.stopPropagation();
    var $target = $(event.currentTarget); 
    var title = $target.find('#board_title').val();
    this.collection.create({
      title: title
     });
    $target.find('#board_title').val('') 
  },
  
  deleteBoard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    var id = $target.data('id');
    var model = this.collection.get(id);
    model.destroy();
  },    
   

  
});