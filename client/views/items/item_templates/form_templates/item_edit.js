Template.itemEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentItemId = this._id;
    var itemProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      category: $(e.target).find('[name=category]').val(),
    };

    Items.update(currentItemId, { $set: itemProperties }, function(error) {
      if(error)
        alert(e.reason);
      else
        Router.go('itemPage', {_id: currentItemId});
    });
    Session.set('editing_item', false);
  }
});

Template.itemEdit.helpers({
  isSelected: function(value) {
    return value === this.category;
  }
});
