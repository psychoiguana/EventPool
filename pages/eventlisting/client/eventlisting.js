Template.eventlisting.helpers({
  eventlisting: function() {
    return Accounts.find({});
  },
})

Template.eventlisting.events({
  "click .js-submit": function(event){
    event.preventDefault();
    console.log("clicked")
    const chatline = {name:name, createdAt:new Date()}
  }
});
