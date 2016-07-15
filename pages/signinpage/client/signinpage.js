
Template.signinpage.events({
      'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.signinpageUsername.value;

        var passwordVar = event.target.signinpagePassword.value;
        {{#each user in users}} {
        	if (user.username == usernameVar) {
        		if (users.password == passwordVar) {

        		}
        		else {
        			document.getElementById("youFailed").innerHTML = "Wrong Password, try again";
        		}
        	}
		}
		{{/each}}
		document.getElementById("youFailed").innerHTML = "User does not exist, please try again"

        console.log("Form submitted")
      }
    });

Template.signinpage.helpers({
        users: function() {
            return Accounts.find();
        }