Template.itemPage.events({
  'click .delete': function(e) {
    e.preventDefault();
    if(confirm("Delete this item?")) {
      var currentItemId = this._id;
      Items.remove(currentItemId);
      Router.go('itemsPage');
    }
  }
});
