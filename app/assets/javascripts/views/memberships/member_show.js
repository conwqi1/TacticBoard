TrelloVideo.Views.MembershipShow = Backbone.CompositeView.extend({
  template: JST['memberships/show'],
  tagName: "li",
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click .deleteMember":"deleteMembership",
  },

  deleteMembership: function(event){
    this.model.destroy();
  },
  
  render: function(){
    var renderContent = this.template({
      membership: this.model
    });
    this.$el.html(renderContent);
    return this;
  },
  
}); 