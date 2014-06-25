Items = new Meteor.Collection('items');

Items.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  addItem: function(itemAttributes){
    var user = Meteor.user();

    if(!user)
      throw new Meteor.Error(401, "You must log in before adding items");

    item = _.extend(_.pick(itemAttributes, 'title', 'description', 'category'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    item._id = Items.insert(item);
    if(item._id){
      return item._id;
    } else {
      throw new Meteor.Error(422, "Your item was not saved. Try again.");
    }
  }
});
