TrelloVideo.Views.ChecklistShow = Backbone.CompositeView.extend({
  template: JST['checklists/show'],
  
  events: {// "click .deleteCheckList":"deleteChecklist"
            "submit .creatItem":"createItem"},
  
  initialize: function(){
    this.collection = this.model.items();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addItem);
    this.listenTo(this.collection, 'remove', this.removeItem);
    // this.listenTo(this.model, 'remove', this.removeChecklist);
  },
  
  // deleteChecklist: function(event){
  //   event.preventDefault();
  //   this.model.destroy();
  // },
  //
  //
  // removeChecklist: function(checklist){
  //   var view = TrelloVideo.Views.ChecklistShow({
  //     model: checklist
  //   });
  //   debugger
  //   this.removeSubview(".checklists-container", view)
  // },
  //
  
  
  
  createItem: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = $target.find("item_title")
    var checklistId = $target.data('id');
    var ord = this.collection.length;
    var item = new TrelloVideo.Models.Item({
      checklistId: checklistId,
      title: title,
      ord: ord
    });
    this.collection.add(item);
  },
  
  
  addItem: function(item){
    var view = new TrelloVideo.Views.ItemShow({
      model: item
    });
    this.addSubview('.checklist-items', view);
  },

  // deleteItem: function(event){
  //   event.preventDefault();
  //   var $target = $(event.currentTarget);
  //   var id = $target.data('id');
  //   var model = this.collection.get(id);
  //   model.destroy();
  // },
  //
  // removeItem: function(checklist){
  //   var view = _.find(
  //     this.subviews(".checklist-items"),
  //     function(view){
  //       return view.model === checklist;
  //     });
  //   this.removeSubview(".checklist-items", view)
  // },

  
  render: function(){
    var renderContent = this.template({
      checklist: this.model
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    this.$('.checklist-items').sortable();
    this.$('.checklist-items').disableSelection();
    return this;
  }, 
});