TrelloVideo.Collections.Boards = Backbone.Collection.extend({
  model: TrelloVideo.Models.Board,
  url: "api/boards",
  
  getOrFetch: function(id){
    var board = this.get(id);
    if(!board){
      board = new TrelloVideo.Models.Board({id: id});
      board.fetch({
        success: function(){
          this.add(board);
        }.bind(this)
      });
    }else{
      board.fetch();
    }
    return board;
  }
});

TrelloVideo.Collections.boards = new TrelloVideo.Collections.Boards;