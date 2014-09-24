window.TrelloVideo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new TrelloVideo.Routers.Router({$root: $('#main')})
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   TrelloVideo.initialize();
// });
