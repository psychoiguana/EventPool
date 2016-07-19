Template.eventlisting.helpers({
  eventAccounts: function() {
    return Accounts.find();
  },
})

Template.eventlisting.events({
  "click .js-submit": function(event){
    event.preventDefault();
    const name = {name:Name}
    console.log("the button works at least")
  }
});
