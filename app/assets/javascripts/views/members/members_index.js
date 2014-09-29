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
  
  // createMember: function(){
  //   event.preventDefault();
  //   $target = $(event.currentTarget);
  //   var memberEmail = $target.find('#memberEmail').val();
  //   var user_id = this.collection.get(memberEmail);
  //   var board_id =
  //   this.collection.create({
  //     user_id: user_id
  //     board_id: board_id
  //   });
  //   //clear the content
  //   $target.find('#memberEmail').val('');
  // },
  
  deleteMember: function(){
    
  }
}); 