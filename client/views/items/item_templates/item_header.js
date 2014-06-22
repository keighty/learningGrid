Template.itemHeader.events({
  'click .toggle-form': function(e, t) {
    console.log(e);
    $('.resources-form').toggleClass('hidden');
  }
});
