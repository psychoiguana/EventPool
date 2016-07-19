Template.browse.helpers({
	eventPools: function() {
		return Pools.find();
		//return Pools.find({},{sort:{ename:1}});
	},



})

Template.poolitem.events({
	"click .js-delete": function(event){
		console.log("clicked delete");
		console.dir(this);
		Pools.remove(this.pool._id);
	},

})
