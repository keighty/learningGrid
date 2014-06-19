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
        Meteor.subscribe('gotIts')
      ]; },
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

