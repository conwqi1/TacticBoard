TrelloVideo.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$root
  },
  
  routes: {
    '': 'boardsIndex',
    'boards/:id': 'boardShow'
  },
  
  boardsIndex: function(){
    var collection = TrelloVideo.Collections.boards;
    collection.fetch();
    var view = new TrelloVideo.Views.BoardsIndex({
      collection: TrelloVideo.Collections.boards
    });
    this._swapView(view);
  },
  
  boardShow: function(id){
    var board = TrelloVideo.Collections.boards.getOrFetch(id);
    var view = new TrelloVideo.Views.BoardShow({
      model: board
    });

    this._swapView(view);
  },
  
  _swapView: function(view){
   this._currentView && this._currentView.remove();
   this._currentView = view; 
   this.$rootEl.html(view.render().$el);
  }
});