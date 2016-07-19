Template.passengerregister.events({
  "click .js-submit":  function(event){
        console.log("clicked it");
        event.preventDefault();
        const Name = $(".js-name").val();
        const email = $(".js-email").val();
	    const phone = $(".js-phone").val();
        const isDriver = false;
        const birthday = null;
        const licensePlate = null;
        const userId = Meteor.userId();
        console.log("Form submitted.");
	    const obj = {Name,email,phone,userId,isDriver,birthday,licensePlate};
        console.dir(obj);
        Accounts.insert(obj);
        Router.go("home");
   },

});
