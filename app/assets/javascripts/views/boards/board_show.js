TrelloVideo.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function(){
    this.collection = this.model.lists();
    this.collection.each(this.addList.bind(this));
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeList);
    this.listenTo(this.collection, "add", this.addList);
    
    this.membershipCollection = this.model.memberships();
    this.membershipCollection.each(this.addMembership.bind(this));
    this.listenTo(this.membershipCollection, "add", this.addMembership);
    this.listenTo(this.membershipCollection, "remove", this.removeMembership);
  },
  
  events: { 
    "submit .createList":"createList",
    "click #delete_list":"deleteList",
    "submit .createMember":"createMembership",
    },
    
  createMembership: function(event){
    event.preventDefault();
    $target = $(event.currentTarget);
    var memberEmail = $target.find('#memberEmail').val();
    var memberId = User_Info[memberEmail];
    var boardId = this.model.id;
    this.membershipCollection.create({
     user_id: memberId,
     board_id: boardId
    });
    $target.find('#memberEmail').val('');
   },
   
  addMembership: function(membership){
    var view = new TrelloVideo.Views.MembershipShow({
      model: membership,
    });
    this.addSubview('.membersContainer', view)
  },
   
  removeMembership: function(membership){
    var view= _.find(
      this.subviews(".membersContainer"),
      function(view){
        return view.model === membership;
      })
    this.removeSubview(".membersContainer", view)
  },
  
  createList: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = $target.find('#list_title').val();
    var boardId = $target.data('id');
    var ord = this.collection.length;
    this.collection.create({
      board_id: boardId,
      title: title,
      ord: ord
    });
    $target.find('#list_title').val('')
  },
  
  deleteList: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    var id = $target.data('id');
    var model = this.collection.get(id);
    model.destroy();
  },

  addList: function(list){
    var view = new TrelloVideo.Views.ListShow({
        model: list
    });
    this.addSubview('#lists', view);
  },
  
  removeList: function(list){
    var view = _.find( 
      this.subviews("#lists"),
      function(view){
        return view.model === list;
      });
    this.removeSubview("#lists", view)
  },
  
  render: function(){
    var renderContent = this.template({
      board: this.model
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    this.setUpSortable();
    this.setUpSidebar();
    this.setUpTypeahead();
    return this;
  },
  
  setUpSortable: function() {
    this.$('.lists_container').sortable();
    this.$('.lists_container').draggable();
    this.$('.cards-container').sortable();
    this.$('.cards-container').draggable();
    this.$('.checklists-container').sortable();
     
  },
  
  setUpTypeahead: function() {
    var members = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map( USER_EMAILS, function(userEmail) { 
        return { value: userEmail}; 
      })
    });
    members.initialize();
    this.$('#bloodhound .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'members',
      displayKey: 'value',
      source: members.ttAdapter()
    });
  },
  
  setUpSidebar: function() {
    this.$( ".sidebar" ).simpleSidebar({
        settings: {
          opener: "#open-sb",
          wrapper: ".wrapper",
          animation: {
            easing: "easeOutQuint"
          }
        },
        sidebar: {
          align: "right",
          width: 200,
          closingLinks: 'a',
        }
      });
   }
  
});