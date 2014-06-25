Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('items'); }
});

Router.map(function() {
  this.route('itemsPage', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('items')
      ]; }
  });
  this.route('itemPage', {
    path: '/items/:_id',
    waitOn: function() {
      return [Meteor.subscribe('singlePost', this.params._id)];
    },
    data: function() { return Items.findOne(this.params._id); }
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, { only: 'postSubmit' });
Router.onBeforeAction(function() { clearErrors(); });
