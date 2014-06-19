Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_EMAIL' });

Handlebars.registerHelper('formatDate', function(date) {
  return $.datepicker.formatDate('dd-M-yy', date);
});