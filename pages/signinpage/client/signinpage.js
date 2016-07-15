
Template.signinpage.events({
      'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.signinpageUsername.value;

        var passwordVar = event.target.signinpagePassword.value;
        console.log("Form submitted")
      }
    });