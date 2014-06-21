Template.itemSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var title = $(e.target).find('[name=title]'),
        description = $(e.target).find('[name=description]'),
        category = $(e.target).find('[name=category]');

    var itemProperties = {
      title: title.val(),
      description: description.val(),
      category: category.val(),
    };

    Meteor.call('addItem', itemProperties, function(error, itemId) {
      if(error) {
        throwError(error.reason);
      } else {
        title.val('');
        description.val('');
        category.val('learn-it');
      }
    });
  }
});