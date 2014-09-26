TrelloVideo.Models.Checklist = Backbone.Model.extend({
  items: function(){
    if (!this._checklists){
      this._checklists = new TrelloVideo.Collections.Checklists([], {list: this})
    }
    return this._checklists
  },

  parse: function(response){
    if(response.cards){
      this.items().set(response.items, {parse: true});
      delete response.items;
    }
    return response;
  }

});