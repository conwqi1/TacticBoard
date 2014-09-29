TrelloVideo.Views.CardModal = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection = this.model.checklists();
    this.collection.each(this.addChecklist.bind(this));
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addChecklist);
    this.listenTo(this.collection, 'remove', this.removeChecklist);
  },
  
  classNames: 'modal fade',
  
  template: JST['cards/modal'],
  
  events: {"click .create_checklist":"createChecklist",
           "click .create_duedate":"createDueDate",
           "click .deleteCheckList":"deleteChecklist",
           'click .close_modal': 'dismiss',
           'click .card-modal-backdrop' : 'dismiss',
           'click .glyphicon-calendar': "createDueDate"},
           
  dismiss: function (event) {
    event.preventDefault();
    // this.remove();
    this.$el.hide();
    $('modal fade in').remove();
    $('modal-backdrop fade in').remove();
  },
  
  createDueDate: function(event){
    var $target = $(event.currentTarget)
  },
  
  addDueDate: function(checklist){
    
  },
  
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
    var $target = $(event.currentTarget);
    var checklistId = $target.data('id');
    var model = this.collection.get(checklistId);
    model.destroy();
  },

  removeChecklist: function(checklist){
    var view = _.find(
      this.subviews(".checklists-container"),
      function(view){
        return view.model === checklist;
      });
    this.removeSubview(".checklists-container", view)
  },
  

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.attachSubviews();
    window.modal = this;
    return this;
  }
});