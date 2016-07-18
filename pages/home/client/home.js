if (Meteor.isClient){
	
}

Template.home.events({
	"click .clear": function(event){
		Meteor.call("clearAccounts");

	},

})

Template.home.events{(
	"click. js-searchbar": function(event) {
		const searchedEvent = $(". js-searchedEvent").val(); 
		// looks at the search keywords
		// customize searchedevent page with the matching keywords in the pools collection

		// create an empty collection
		// store your matching events in the empty collection
		// present it in the searchedevent.html page
		// clear the collection
		Router.go(searchedevent);

	}
	)} 

//