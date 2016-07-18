Router.configure({
	// this is the name of your layout template
	layoutTemplate: 'layout2',
});

// here is how you specify the home page template
Router.route('/', {name: 'home'});

// add more templates here if you want them to be reachable
Router.route('about');

Router.route('browse');

Router.route('driversetup');

Router.route('signinpage');

Router.route('registerpage');

Router.route('passengerregister');

Router.route('createevent');

Iron.Router.hooks.requireLogin = function () {
  if (! Meteor.user()) {
  	console.log("first first if");
    if (Meteor.loggingIn()) {
      console.log("first second if");
      this.render('this.loadingTemplate');
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};


Iron.Router.hooks.goToAbout = function () {
  if (Meteor.user()) {
  	console.log("the middle one");
    Router.go('about');
    this.next();
  } else {
    this.next();
  }
};

Iron.Router.hooks.goToAbout= function () {
  if (!Meteor.user()) {
  	console.log("the last one");
    Router.go('about');
    this.next();
  } else {
    this.next();
  }
};


/*
// here is how to create a link to just one document
// in your collection
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 */
