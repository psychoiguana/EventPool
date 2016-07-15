Template.browse.helpers({
	eventPools: function() {
		return Pools.find();
		//return Pools.find({},{sort:{ename:1}});
	},



})

Template.poolitem.events({
	"click .js-delete": function(event){
		Pools.remove(this.p._id);
		console.dir(this);
	}
})
