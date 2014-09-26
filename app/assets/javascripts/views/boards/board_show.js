TrelloVideo.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function(){
    this.collection = this.model.lists();
    this.collection.each(this.addList.bind(this));
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeList);
    this.listenTo(this.collection, "add", this.addList);
  },
  
  events: {"submit .createList":"createList",
           "click #delete_list":"deleteList"},
  
  createList: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = $target.find('#list_title').val();
    var boardId = $target.data('id');
    var ord = this.collection.length();
    this.collection.create({
      board_id: boardId,
      title: title,
      ord: ord
    });
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
    this.$('.lists_container').sortable();
    this.$('.list-cards').sortable();
    this.$('.list-cards').disableSelection();
    return this;
  },
  
});