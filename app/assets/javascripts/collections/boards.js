TrelloVideo.Collections.Boards = Backbone.Collection.extend({
  model: TrelloVideo.Models.Board,
  url: "api/boards",
  
  getOrFetch: function(id){
    var board = this.get(id);
    var boards = this;
    if(!board){
      board = new TrelloVideo.Models.Board({id: id});
      board.fetch({
        success: function(){
          boards.add(board);
        }
      });
    }else{
      board.fetch();
    }
    return board;
  }
  
});

TrelloVideo.Collections.boards = new TrelloVideo.Collections.Boards;