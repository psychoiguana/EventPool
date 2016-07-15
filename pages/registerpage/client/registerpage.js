if (Meteor.isClient) {
    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var usernameVar = event.target.registerUsername.value;
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            console.log("Form submitted.");
        }
    });
    
}
