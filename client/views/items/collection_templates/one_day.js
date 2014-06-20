Template.oneDay.helpers({
  oneDays: function() {
    return Items.find({category: "one-day"});
  }
})