if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    username: 'kt',
    email: 'kt@example.com',
    password: 'foobar'
  });
}

if (Items.find().count() === 0) {
  var adminUser = Meteor.users.findOne();
  var now = new Date().getTime();

  Items.insert({
    title: "html",
    description: "this is html",
    category: "got-it",
    userId: adminUser._id,
    postAuthor: adminUser.username,
    submitted: now - 7 * 3600 * 1000
  });

  Items.insert({
    title: "lisp",
    description: "this is lisp",
    category: "learn-it",
    userId: adminUser._id,
    postAuthor: adminUser.username,
    submitted: now - 7 * 3600 * 1000
  });

  Items.insert({
    title: "clojure",
    description: "this is clojure",
    category: "one-day",
    userId: adminUser._id,
    postAuthor: adminUser.username,
    submitted: now - 7 * 3600 * 1000
  });
}
