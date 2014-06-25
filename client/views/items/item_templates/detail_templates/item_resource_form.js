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

    if(!detailProperties.title || resourceUsed(detailProperties.title)){
      throwError("You must include a unique title.");
    } else {
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

    function resourceUsed(title) {
      var item = Items.findOne(currentItemId);
      for (var i = 0; i < item.resources.length; i++) {
          if (item.resources[i].title === title) {
              return true;
          }
      }
      return false;
    }
  }
});