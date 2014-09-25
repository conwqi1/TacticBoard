TrelloVideo.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.collection = this.model.lists();
    this.listenTo(this.collection, "remove", this.removeList)
    this.listenTo(this.collection, "add", this.addList)
  },
  
  // events: {"click #creat_list":"addList"},
  //
  // addList: function(list){
  //   var listShow = new Trello.Views.ListShow({
  //       model: list
  //   });
  //   this.addSubview(“.lists”, listShow);
  // },

  // removeList: function(){
  //   var listShow =
  //   this.removeSubview(".list",listShow)
  // },
  
  render: function(){
    var renderContent = this.template({
      board: this.model
    });
    this.$el.html(renderContent);
    // this.renderLists();
    // this.renderListForm();
    return this;
  },

  // renderLists: function () {
  //   this.collection.each(this.addList.bind(this));
  //   this.$('#lists').sortable();
  // },

  // renderListForm: function () {
  //   var view = new TrelloClone.Views.ListForm({
  //     collection: this.collection
  //   });
  //   this.addSubview('#list-form', view);
  // }
  
});