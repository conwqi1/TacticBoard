TrelloVideo.Views.ListNew = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "syc, add", this.render)
  },
  
  event: {"submit #create_list":"addList"},
  
  addList: function(){
    
  },
  
  
})