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
  
  events: {"submit #createCard":"createCard",
            "click #deleteCard":"deleteCard"},
  
  createCard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var title = $target.find('#card_title').val();
    var description = $target.find('#card_description').val();
    var listId = $target.data('id')
    this.collection.create({
      list_id: listId,
      title: title,
      description: description
    });
  },
  
  deleteCard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget); 
    var id = $target.data('id');
    var model = this.collection.get(id);
    model.destroy();
  },
  
  addCard: function(card){
    var view = new TrelloVideo.Views.CardShow({
      model: card
    });
    this.addSubview('.list-cards', view);
  },

  removeCard: function(list){
    var view = _.find( 
      this.subviews(".list-cards"),
      function(view){
        return view.model === list;
      });
    this.removeSubview(".list-cards", view)
  },
  
  render: function(){
    var renderContent = this.template({
      list: this.model
    });
    this.$el.html(renderContent);
    this.attachSubviews();
    this.$('.list-cards').sortable();
    this.$('.list-cards').disableSelection();
    return this;
  },
  
});