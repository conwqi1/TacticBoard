TrelloVideo.Views.ListShow = Backbone.CompositeView.extend({
  template: JST ['lists/show'],
  className: 'list-display',
  
  initialize: function(){
    this.collection = this.model.cards();
    this.collection.each(this.addCard.bind(this));
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addCard);
    this.listenTo(this.collection, 'remove', this.removeCard);
  },
  
  addCard: function(card){
    var view = new TrelloVideo.Views.CardShow({
      model: card
    });
    this.addSubview('.list-cards', view);
  },

  // removeCard: function(card){
  //   var subview = _.find(
  //     this.subviews(".list-cards")
  //     function(subview){
  //       return subview.model ==== card;
  //     }
  //   );
  //   this.removeSubview(".list-cards",view)
  // },
  
  render: function(){
    var renderContent = this.template({
      list: this.model
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    return this;
  },
  
});