TrelloVideo.Collections.Members = Backbone.Collection.extend({
  model: TrelloVideo.Models.Member,
  url: "/api/members"
})