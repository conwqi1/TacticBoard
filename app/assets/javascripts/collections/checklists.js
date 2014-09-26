TrelloVideo.Collections.Checklists = Backbone.Collection.extend({
  comparator: 'ord',
  model: TrelloVideo.Models.CheckList,
  url: "/api/checklists",
  
  initialize: function(models, options){
    this.card = options.card;
  }
});