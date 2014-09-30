TrelloVideo.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",
  
  lists: function(){
    if(!this._lists){
      this._lists = new TrelloVideo.Collections.Lists([], {board: this})
    }
    return this._lists;
  },
  
  members:function(){
    if(!this._members){
      this._members = new TrelloVideo.Collections.Members([], {board: this})
    }
    return this._members;
  },
  
  parse: function (response) {
    if(response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }
    
    if(response.members){
      this.members().set(response.members, {parse: true});
      delete response.members;
    }

    return response;
  }
  
});