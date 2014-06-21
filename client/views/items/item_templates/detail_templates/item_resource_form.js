Template.itemResourceForm.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentItemId = this._id;
    var detailProperties = {
      title: $(e.target).find('[name=title]').val(),
      url: $(e.target).find('[name=url]').val(),
      notes: $(e.target).find('[name=notes]').val(),
      submitted: new Date().getTime()
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
  }
});