if (Meteor.isClient){
	
}

Template.home.events({
	"click .clear": function(event){
		Meteor.call("clearAccounts");

	},

})