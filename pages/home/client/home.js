Session.set("searchTerms","");
Session.set("searchCategory","");


Template.home.helpers({
   events: function(){
       const terms = Session.get("searchTerms");
       const category = Session.get("searchCategory");
       if (category!="")
	   return Pools.find({category:category});
       return Pools.find({},{limit:3,sort:{createdAt:1}});
   }
})

Template.home.events({
	"click .clear": function(event){
		Meteor.call("clearAccounts");

	},

})


		// looks at the search keywords
		// customize searchedevent page with the matching keywords in the pools collection

		// create an empty collection
		// store your matching events in the empty collection
		// present it in the searchedevent.html page
		// clear the collection

//

		//Router.go(searchedevent);
	},

	}) 

//

