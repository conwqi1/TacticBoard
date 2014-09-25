window.TrelloVideo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new TrelloVideo.Routers.Router({$root: $('#main')})
    if (!Backbone.History.started){
      Backbone.history.start();
    }
  }
};


