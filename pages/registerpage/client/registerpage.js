if (Meteor.isClient) {
    Template.registerpage.events({
        'submit form': function(event) {
            event.preventDefault();
            var usernameVar = event.target.registerUsername.value;
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            var confPasswordVar = event.target.registerConfPassword.value;
            if (passwordVar == confPasswordVar) {
            console.log("Form submitted.");
        }
        	else {
        		document.getElementById("failMsg").innerHTML = "Passwords do not match. Try again.";
        		console.log("fail okay");
        	}
        }
    });
    
}
