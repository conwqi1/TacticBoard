TrelloVideo.Views.MemberShow = Backbone.CompositeView.extend({
  template: JST['members/show'],
  
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click .deleteMember":"deleteMember",
  },

  deleteMember: function(event){
    this.model.destroy();
  },
  
  render: function(){
    var renderContent = this.template({
      members: this.collection
    });
    this.$el.html(renderContent);
    return this;
  },
  
}); 