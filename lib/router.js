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

Router.route('searchedevent');

Router.route('eventlisting/:_id', 
	{name:"eventlisting", 
	data: function(){
	const c = Pools.findOne(this.params._id);
	return c;
}});

// Iron.Router.hooks.requireLogin = function () {
//   if (! Meteor.user()) {
//   	console.log("first first if");
//     if (Meteor.loggingIn()) {
//       console.log("first second if");
//       this.render('this.loadingTemplate');
//     } else {
//       this.render('accessDenied');
//     }
//   } else {
//     this.next();
//   }
// };


// Iron.Router.hooks.login = function () {
//   if (Meteor.user()) {
//   	console.log("login")
//     Router.go('passengerregister');
//     this.next();
//   } else {
//     this.next();
//   }
// };

// Iron.Router.hooks.signOut= function () {
//   if (!Meteor.user()) {
//   	console.log("the last one");
//     Router.go('about');
//     this.next();
//   } else {
//     this.next();
//   }
// };

// Router.onBeforeAction('login', {except: [about, browse, createevent, driversetup, eventlisting, home, passengerregister]});
// Router.onBeforeAction('signOut', {except: [about, browse, createevent, driversetup, eventlisting, home, passengerregister]});


/*s
// here is how to create a link to just one document
// in your collection
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 */
