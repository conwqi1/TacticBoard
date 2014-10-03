TrelloVideo.Views.CardShow = Backbone.CompositeView.extend({
  className: "content-container-cardshow list-group-item",
  tagName: "li",
  initialize: function(){
    this.collection = this.model.checklists();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addChecklist);
    this.listenTo(this.collection, 'remove', this.removeChecklist);
  },
  
  template: JST['cards/show'],
  
  events: {"click .card_link":"showModal",
            "mouseenter .card_block":"zoomIn",
            "mouseleave .card_block": "zoomOut",
            "click #deleteCard":"deleteCard",},
  
  deleteCard:function(){
    event.preventDefault();
    var $target = $(event.currentTarget);
    $target.addClass('animated zoomOutRight');
    setTimeout(function(){this.model.destroy()}.bind(this),1000);
    clearTimeout();
  },
  
  zoomIn:function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    $target.animate({ margin: -10, width: "+=20", height: "+=20" });
    var font = $target.find('.card_link');
    font.animate({fontSize: "+=100%"});
  },
  
  zoomOut:function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    $target.animate({ margin: 0, width: "-=20", height: "-=20" });
    var font = $target.find('.card_link');
    font.animate({fontSize: "-=100%"});
  },
  
  showModal: function () {
    this.model.fetch();
    this.modalView = this.modalView ||
      new TrelloVideo.Views.CardModal({ model: this.model });
    $('.content-container-lists').prepend(this.modalView.render().$el);
    this.modalView.$el.show();
    this.modalView.delegateEvents();
  },
           
  render: function(){
    var renderContent = this.template({
      card: this.model
    });
    this.$el.html(renderContent);
    this.$el.attr("data-card-id", this.model.id)
    return this;
  },
});




