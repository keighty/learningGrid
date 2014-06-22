Session.set('editing_item', false);

Template.itemPage.helpers({
  editItem: function() {
    return Session.equals('editing_item', true);
  }
});

Template.itemPage.events({
  'click .delete': function(e) {
    e.preventDefault();
    if(confirm("Delete this item?")) {
      var currentItemId = this._id;
      Items.remove(currentItemId);
      Router.go('itemsPage');
    }
  },
  'click .item-banner': function(e, t) {
    Session.set('editing_item', true);
    Meteor.flush;
    focusText(t.find("[name='title']"));
  }
});
