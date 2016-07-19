Template.eventlisting.helpers({
  eventAccounts: function() {
    return Accounts.find();
  },
})

Template.eventlisting.events({
  "click .js-submit": function(event){
  event.preventDefault();
  console.log("the button works at least")
  const Name = $(".js-name").val();
  Chats.insert(Name);
  }
});
