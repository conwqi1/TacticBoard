TrelloVideo.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",
  
  lists: function(){
    if(!this._lists){
      this._lists = new TrelloVideo.Collections.Lists([], {board: this})
    }
    return this._lists;
  },
  
  memberships: function(){
    if(!this._memberships){
      this._memberships = new TrelloVideo.Collections.Memberships([], {board: this})
    }
    return this._memberships;
  },
  
  parse: function (response) {
    if(response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }
    
    if(response.memberships){
      this.memberships().set(response.memberships, {parse: true});
      delete response.memberships;
    }

    return response;
  }
  
});