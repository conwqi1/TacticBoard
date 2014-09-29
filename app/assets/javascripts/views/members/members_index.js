TrelloVideo.Views.MemberIndex = Backbone.View.extend({
  template: JST['members/index'],
  
  initialize: function(){
    this.listenTo(this.collection, 'add, sync, remove', this.render)
  },
  
  render: function(){
    var renderContent = this.template({
      members: this.collection
    });
    this.$el.html(renderContent);
    return this;
  },
  
  events: {
    "submit .createMember":"createMember",
    "click .deleteMember":"deleteMember"
  },
  
  createMember: function(){
    event.preventDefault();
    $target = $(event.currentTarget);
    var memberEmail = $target.find('')
  },
  
  deleteMember: function(){
    
  }
}); 