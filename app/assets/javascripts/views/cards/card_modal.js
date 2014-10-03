TrelloVideo.Views.CardModal = Backbone.CompositeView.extend({
  initialize: function () {
    this.index = 1
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
           'click .glyphicon-calendar': "createDueDate",
           "sortstop": "saveChecklistOrd"},
           
  saveChecklistOrd: function (event) {
   event.stopPropagation();
   this.$('.checklists-container').children().each(function(index, element) {
     var $itemElement = $(element);
     var itemId = $itemElement.data('checklist-id');
     var item = this.collection.get(itemId);
     item.save({ord: index});
   }.bind(this));
     this.subviews()[".checklists-container"]=_.sortBy(this.subviews()[".checklists-container"], function(subview){
       return subview.model.attributes.ord;
     });

  },
  
  dismiss: function (event) {
    event.preventDefault();
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
    var title = 'Line-up'+this.index;
    var cardId = $target.data('id');
    var ord = this.collection.length;
    this.collection.create({
      card_id: cardId,
      title: title,
      ord: ord
    });
    this.index++;
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
    this.$('.checklists-container').sortable();
    return this;
  }
});