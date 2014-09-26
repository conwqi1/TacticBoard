TrelloVideo.Models.Checklist = Backbone.Model.extend({
  items: function(){
    if (!this._checklists){
      this._checklists = new TrelloVideo.Collections.Items([], {checklist: this})
    }
    return this._checklists
  },

  parse: function(response){
    if(response.items){
      this.items().set(response.items, {parse: true});
      delete response.items;
    }
    return response;
  }

});