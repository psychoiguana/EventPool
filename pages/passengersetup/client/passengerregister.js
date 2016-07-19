Template.passengerregister.events({
  "click .js-submit":  function(event){
            console.log("clicked it");
            event.preventDefault();
            const Name = $(".js-name").val();
            const email = $(".js-email").val();
	          const phone = $(".js-phone").val();
            const userId = Meteor.userId();
            console.log("Form submitted.");
	          const obj = {Name,email,phone,userId};
            console.dir(obj);
            Accounts.insert(obj);
            Router.go("home");
   },

});
