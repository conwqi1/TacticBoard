TrelloVideo.Routers.Router = Backbone.Router.extend({
  initilize: function(options){
    this.$rootEl = options.$rootEl
  },
  
  routes: {
    '': 'boardsIndex',
    'boards/:id': 'boardShow'
  },
  
  boardsIndex: function(){
    TrelloClone.Collections.boards.fetch();

    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards
    });

    this._swapView(view);
  },
  
  boardShow: function(){
    var board = TrelloClone.Collections.boards.getOrFetch(id);

    var view = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapView(view);
  },
  
  _swapView: function(view){
   this._currentView && this._currentView.remove();
   this.currentView = view; 
   this.$rootEl.html(view.render().$el);
  }
});