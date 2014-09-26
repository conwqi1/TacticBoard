TrelloVideo.Views.ChecklistShow = Backbone.View.extend({
  tagName: 'li',
  template: JST['checklists/show'],
  
  events: {"click .deleteCheckList":"deleteChecklist"},
  
  initialize: function(){
    this.collection = this.model.items();
    this.listenTo(this.model, 'sync', this.render);
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
  render: function(){
    var renderContent = this.template({
      checklist: this.model
    });
    this.$el.html(renderContent);
    return this;
  }
  
});