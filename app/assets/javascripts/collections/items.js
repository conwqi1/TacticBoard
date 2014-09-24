TrelloVideo.Collections.Items = Backbone.Collection.extend({
  model: TrelloVideo.Models.Item,
  url: '/api/items',
  
  initialize: function(models, options){
    this.card = options.card;
  }
});