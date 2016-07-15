if (Meteor.isClient) {
  Template.driversetup.events({
    'submit form': function(event){
      event.preventDefault();
      var zipcodeVar = event.target.zipcode.value;
      var licenseplatenumberVar = event.target.licenseplatenumber.value;
      var phonenumberVar = event.target.phonenumber.value;
      console.log("Form submitted")
    }
  });
}
