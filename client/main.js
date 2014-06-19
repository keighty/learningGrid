Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_EMAIL' });

Handlebars.registerHelper('formatDate', function(date) {
  return $.datepicker.formatDate('dd-M-yy', date);
});

Handlebars.registerHelper('btnClass', function(category) {
  if(category === 'got-it') return "btn-primary";
  if(category === 'learn-it') return "btn-warning";
  if(category === 'one-day') return "btn-inverse";
});
