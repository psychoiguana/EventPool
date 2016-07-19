Template.passengerregister.events({
  "click .js-submit":  function(event){
        console.log("clicked it");
        event.preventDefault();
        const name = $(".js-name").val();
        const email = $(".js-email").val();
	      const phone = $(".js-phone").val();
        const isDriver = false;
        const birthday = null;
        const licensePlate = null;
        const userId = Meteor.userId();
        console.log("Form submitted.");
	      const obj = {name,email,phone,userId,isDriver,birthday,licensePlate};
        console.dir(obj);
        const myAccount = Accounts.findOne({userId});
        if (myAccount) {
	    Accounts.remove(myAccount._id);
        }
        Accounts.insert(obj);
        Router.go("home");
   },

});
