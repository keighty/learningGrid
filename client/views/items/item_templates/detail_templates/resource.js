Template.resource.helpers({
  domain: function(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname !== "learninggrid.meteor.com" ? a.hostname : url;
  }
});

Template.resource.events({
  'click .delete-resource': function(e) {
    Items.update(
      {_id: this.itemId},
      {$pull: { resources: {title: this.title}}}
    );
  }
});
