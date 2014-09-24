TrelloVideo.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  //add stuff in initialize in future to render more css
  
  className: 'boards-index',
  
  initialize: function(){
    this.listenTo(this.collection, 'sync add destroy', this.render);
  },
  
  
  render: function(){
    var renderContent = this.template({
      boards: this.collection
    });
    this.$el.html(renderContent);
    return this;
  },
  
  events: {
    "submit #createBoard": "addBoard"
  },
  
  addBoard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    var title = $target.find('#board_title').val();
    var model = new TrelloVideo.Models.Board({title: title});
    this.collection.create(model)
    Backbone.history.navigate("", { trigger: true });
  },
  
  events: {"click #delete_board":"deleteBoard"},
  
  deleteBoard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    var boardId = $target.data('id');
    this.model = this.collection.get('boardId');
    this.model.destroy();
  },    
   

  
});