Template.passengerregister.events({
  "click .js-submit":  function(event){
            console.log("clicked it");
            event.preventDefault();
            const  username = $(".js-name").val();
            const email = $(".js-email").val();
	    const phone = $(".js-phone").val();
            const userId = Meteor.userId();
            console.log("Form submitted.");
	    const obj = {username,email,phone,userId};
            console.dir(obj);
            Accounts.insert(obj);
            Router.go("home");
   },

});
