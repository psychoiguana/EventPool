Template.layout2.helpers({
  noProfile: function(){
      const userId = Meteor.userId();
      const myAccount = Accounts.findOne({userId:userId})
      return (myAccount == null) && (userId != null);
  }
})
