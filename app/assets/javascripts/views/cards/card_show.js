TrelloVideo.Views.CardShow = Backbone.CompositeView.extend({
  tagName: 'li',
  initialize: function(){
    this.collection = this.model.checklists();
    this.collection.each(this.addChecklist.bind(this));
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addChecklist);
    this.listenTo(this.collection, 'remove', this.removeChecklist);
  },
  
  template: JST['cards/show'],
  
  events: {"click .create_checklist":"createChecklist",
           "click .create_duedate":"createDueDate",
           "click .deleteCheckList":"deleteChecklist"},

  
  createChecklist: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = 'Checklist';
    var cardId = $target.data('id');
    var ord = this.collection.length;
    this.collection.create({
      card_id: cardId,
      title: title,
      ord: ord
    });
  },
  
  
  addChecklist: function(checklist){
    var view = new TrelloVideo.Views.ChecklistShow({
      model: checklist
    });
    this.addSubview('.checklists-container', view);
  },

  deleteChecklist: function(event){
    event.preventDefault();
    this.model.destroy();
  },

  removeChecklist: function(checklist){
    var view = _.find(
      this.subviews(".checklists-container"),
      function(view){
        return view.model === checklist;
      });
    this.removeSubview(".checklists-container", view)
  },

  
  render: function(){
    var renderContent = this.template({
      card: this.model
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    this.$('.checklists-container').sortable();
    this.$('.checklists-container').disableSelection();
    return this;
  }, 
});



