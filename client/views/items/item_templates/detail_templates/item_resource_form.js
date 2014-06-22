Template.itemResourceForm.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentItemId = this._id,
        title = $(e.target).find('[name=title]'),
        url = $(e.target).find('[name=url]'),
        notes = $(e.target).find('[name=notes]');

    var detailProperties = {
      title: title.val(),
      url: url.val(),
      notes: notes.val(),
      submitted: new Date().getTime(),
      itemId: currentItemId
    };

    Items.update(currentItemId, { $addToSet: {resources: detailProperties} }, function(error) {
      if(error) {
        throwError(error.reason);
      } else {
        title.val('');
        url.val('');
        notes.val('');
      }
    });
  },
  'click .toggle-form': function(e, t) {
    console.log(e);
    $('.resources-form').toggleClass('hidden');
  }
});