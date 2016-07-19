Template.eventlisting.helpers({
  eventlisting: function() {
    return Accounts.find({});
  },

  accountsOf: function(riders){
      return Accounts.find({userId:{$in:riders}});
      //return Accounts.find();
  },

})

Template.eventlisting.events({
  "click .js-submit": function(event){
    event.preventDefault();
    console.log("clicked");
      console.dir(this);
      const userId = Meteor.userId();
      if (this.riders.length >= this.seats) {
	  alert("this car is full! You can't get a ride.");
      }else if (! _.contains(this.riders,userId)) {
	  Pools.update(this._id,{$push:{riders: Meteor.userId()}});
      }else {
	  alert("You have already joined this ride!");
      }

  }
});
