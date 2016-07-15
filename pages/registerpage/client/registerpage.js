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
            const email = emailVar;
            const username = usernameVar;
            const password = passwordVar;
            const isDriver = false;
            const isPassenger = false;
            const name = null;
            const zipCode = null;
            const dateOfBirth = null;
            const licensePlate = null;
            const licenseNumber = null;
            const phoneNumber = null;
            const rating = null;
            console.log(email);console.log(password);console.log(username);
            const item = {email, username, password, isDriver, isPassenger, name, zipCode, dateOfBirth, licensePlate, licenseNumber, phoneNumber, rating};
            console.dir(item);
            Accounts.insert(item);     
        }
        	else {
        		document.getElementById("failMsg").innerHTML = "Passwords do not match. Try again.";
        		console.log("fail okay");
        	}
        }


    });
    Template.registerpage.helpers({
        users: function() {
            return Accounts.find();
        }

    })
    
}
