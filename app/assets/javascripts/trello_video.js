window.TrelloVideo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new TrelloVideo.Routers.Router
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   TrelloVideo.initialize();
// });
