Template.resource.helpers({
  domain: function(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname !== "localhost" ? a.hostname : "";
  }
});

Template.resource.events({
  'click .delete-resource': function(e) {
    console.log(e);
  }
});
