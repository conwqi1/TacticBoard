TrelloVideo.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  className: "content-container-lists",
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
    "sortstop": "saveListOrd",
    // "sortstart":"showFace",
    "click #show-ball":"showBalls"
    },
    
   showFace: {
     
   },
     
   showBalls: function(){
     if(!this.$el.find('canvas').is('canvas')){
       this.$el.prepend('<canvas></canvas>')
       var canvasEl = this.$el.find("canvas")[0];
       canvasEl.width = Asteroids.Game.DIM_X;
       canvasEl.height = Asteroids.Game.DIM_Y;
       var ctx = canvasEl.getContext("2d");
       // var imageObj = new Image();
       // imageObj.onload = function(){
       //   ctx.drawImage(imageObj, 25, 25);
       // }
       // imageObj.src = "assets/jeffrey-fiddler.jpg";
       var game = new Asteroids.Game();
       new Asteroids.GameView(game, ctx).start();
     }else{
       this.$el.find('canvas').remove();
     }
   },
   
   saveListOrd: function (event) {
    event.stopPropagation();
    this.$('.lists_container').children().each(function(index, element) {
      var $itemElement = $(element);
      var itemId = $itemElement.data('list-id');
      var item = this.collection.get(itemId);
      item.save({ord: index});
    }.bind(this));
    this.subviews()[".lists_container"]=_.sortBy(this.subviews()[".lists_container"], function(subview){
      return subview.model.attributes.ord;
    });
    this.collection.sort();
   },
    
  createMembership: function(event){
    event.preventDefault();
    $target = $(event.currentTarget);
    var memberEmail = $target.find('#memberEmail').val();
    var memberId = User_Info[memberEmail];
    var boardId = this.model.id;
    this.membershipCollection.create({
     user_id: memberId,
     board_id: boardId,
     animate: true
    });
   },
   
  addMembership: function(membership){
    var view = new TrelloVideo.Views.MembershipShow({
      model: membership,
    });
    this.addSubview('.membersContainer', view)
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
    $('#listButton').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
    this.addSubview('.lists_container', view);

  },
  
  removeList: function(list){
    var view = _.find( 
      this.subviews(".lists_container"),
      function(view){
        return view.model === list;
      });
    this.removeSubview(".lists_container", view)
  },
  
  removeMembership: function(membership){
    var view= _.find(
      this.subviews(".membersContainer"),
      function(view){
        return view.model === membership;
      })
    this.removeSubview(".membersContainer", view)
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
    this.$('.cards-container').sortable();
    this.$('.cards-container').draggable();
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
          width: 300,
          closingLinks: 'a',
        }
      });
   }
  
});