TrelloVideo.Views.CardShow = Backbone.CompositeView.extend({
  className: "content-container-cardshow",
  tagName: "li",
  initialize: function(){
    this.collection = this.model.checklists();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addChecklist);
    this.listenTo(this.collection, 'remove', this.removeChecklist);
  },
  
  template: JST['cards/show'],
  
  events: {"click .card_link":"showModal"},
  
  showModal: function () {
    this.model.fetch();
    this.modalView = this.modalView ||
      new TrelloVideo.Views.CardModal({ model: this.model });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.$el.show();
    this.modalView.delegateEvents();
  },
           
  render: function(){
    var renderContent = this.template({
      card: this.model
    });
    this.$el.html(renderContent);
    // this.attachSubviews();
    return this;
  },
});



