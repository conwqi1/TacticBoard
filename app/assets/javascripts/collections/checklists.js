TrelloVideo.Collections.Checklists = Backbone.Collection.extend({
  model: TrelloVideo.Models.Checklist,
  url: "/api/checklists",
  comparator: 'ord',
  
  initialize: function(models, options){
    this.card = options.card;
  },
  
  getOrFetch: function(id){
    var checklist = this.get(id),
      checklists = this;
    if(!checklist){
      checklist = new TrelloVideo.Models.Checklist({id: id});
      checklist.fetch({
        success: function(){
          checklists.add(checklist);
        },
      });
    }else{
      checklist.fetch();
    }
    return checklist;
  }
});