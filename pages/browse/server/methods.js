Meteor.methods({
  "clearItem":function(){
    Pools.remove(this._id);
  }
})
