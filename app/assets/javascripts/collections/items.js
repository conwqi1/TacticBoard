TrelloVideo.Collections.Items = Backbone.Collection.extend({
  model: TrelloVideo.Models.Item,
  url: '/api/items',
  
  initialize: function(models, options){
    this.checklist = options.checklist;
  }
});