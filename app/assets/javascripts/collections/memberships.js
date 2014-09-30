TrelloVideo.Collections.Memberships = Backbone.Collection.extend({
  model: TrelloVideo.Models.Membership,
  url: "/api/board_memberships",
  initialize: function(models, options){
    this.board = options.board;
  }
})