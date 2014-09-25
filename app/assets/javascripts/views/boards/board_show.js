TrelloVideo.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function(){
    this.collection = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeList);
    this.listenTo(this.collection, "add", this.addList);
  },
  
  events: {"click #creat_list":"addList"},

  addList: function(list){
    var view = new TrelloVideo.Views.ListShow({
        model: list
    });
    this.addSubview(“#lists”, view);
  },

  removeList: function(list){
    var subview = _.find(
      this.subviews("#lists")
      function(subview){
        return subview.model ==== list;
      }
    );
    this.removeSubview("#lists", view)
  },
  
  
  render: function(){
    var view = this;
    var renderContent = this.template({
      board: this.model,
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    return this;
  },
  
  render: function(){
    var renderContent = this.template({
      board: this.model
    });
    this.$el.html(renderContent);
    this.renderLists();
    this.attachSubviews();
    return this;
  },

  renderLists: function () {
    this.collection.each(this.addList.bind(this));
    this.$('#lists');
  };


  
});