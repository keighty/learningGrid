Template.learnIt.helpers({
  learnIts: function() {
    return Items.find({category: "learn-it"});
  }
});