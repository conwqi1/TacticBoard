TrelloVideo.Models.Card = Backbone.Model.extend({
  urlRoot: '/api/cards',

  checklists: function () {
    if(!this._checklists) {
      this._checklists = new TrelloVideo.Collections.Checklists([], {card: this });
    }
    return this._checklists;
  },

  parse: function (response) {
    if(response.checklists) {
      this.checklists().set(response.checklists, { parse: true });
      delete response.checklists;
    }
    return response;
  }
});