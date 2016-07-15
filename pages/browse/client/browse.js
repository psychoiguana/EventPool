Template.browse.helpers({
	eventPools: function() {
		return Pools.find();
	},



})

Template.poolitem.events({
	"click .js-delete": function(event){
		Pools.remove(this.p._id);
		console.dir(this);
	}
})