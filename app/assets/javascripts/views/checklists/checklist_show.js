TrelloVideo.Views.ChecklistShow = Backbone.CompositeView.extend({
  template: JST['checklists/show'],
  
  events: {"submit .creatItem":"createItem",
            "click .deleteItem":"deleteItem"},
  
  initialize: function(){
    this.collection = this.model.items();
    window.c = this.collection;
    this.collection.each(this.addItem.bind(this));
    this.listenTo(this.model, 'sync', this.render);

    this.listenTo(this.collection, 'add', this.addItem);
    this.listenTo(this.collection, 'remove', this.removeItem);
    window.checklist = this;
    console.log('initializing checklist')
  },
  
  createItem: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = $target.find("#item_title").val();
    var checklistId = $target.data('id');
    var ord = this.collection.length;
    this.collection.create({
      checklist_id: checklistId,
      title: title,
      ord: ord
    });
    $target.find("#item_title").val('');
  },
  
  
  addItem: function(item){
    console.log('adding item')
    var view = new TrelloVideo.Views.ItemShow({
      model: item
    });
    this.addSubview('.checklist-items', view);
  },



  removeItem: function(checklist){
    console.log('removing item')
    var view = _.find(
      this.subviews(".checklist-items"),
      function(view){
        return view.model === checklist;
      });
    this.removeSubview(".checklist-items", view)
  },
  
  render: function(){
    var renderContent = this.template({
      checklist: this.model
    });
    console.log('rendering checklist')
    this.$el.html(renderContent);
    this.attachSubviews();
    this.$('.checklist-items').sortable();
    this.$('.checklist-items').disableSelection();
    return this;
  }, 
  

});