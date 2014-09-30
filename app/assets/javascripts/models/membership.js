TrelloVideo.Models.Membership = Backbone.Model.extend({
  urlRoot: "/api/board_memberships",
  
  findEmailById: function(user_id){
    for(var email in User_Info){
      if (User_Info.hasOwnProperty(email) && User_Info[email] === user_id){
        return email;
      }
    }
  },
  
});