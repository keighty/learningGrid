Meteor.publish('items', function() {
  return Items.find({userId: this.userId});
});

Meteor.publish('singlePost', function(id) {
  return id && Items.find(id);
});
