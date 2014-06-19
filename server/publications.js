Meteor.publish('items', function() {
  return Items.find({});
});

Meteor.publish('gotIts', function() {
  return Items.find({category: "got-it"});
});

Meteor.publish('learn', function() {
  return Items.find({category: "learn-it"});
});

Meteor.publish('future', function() {
  return Items.find({category: "one-day"});
});