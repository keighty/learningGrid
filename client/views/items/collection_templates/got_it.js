Template.gotIt.helpers({
  gotIts: function() {
    return Items.find({category: "got-it"});
  }
});