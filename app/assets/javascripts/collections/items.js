TrelloVideo.Collections.Items = Backbone.Collection.extend({
  model: TrelloVideo.Models.Item,
  url: '/api/items',
  comparator: 'ord',
  initialize: function(models, options){
    this.checklist = options.checklist;
  }
});