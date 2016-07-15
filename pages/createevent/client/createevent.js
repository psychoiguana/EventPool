Template.createevent.events({
	'submit form': function(event){
       event.preventDefault();
       var eventtitleVar = event.target.eventtitle.value;
       var locationVar = event.target.Location.value;
       console.log("Form submitted")
    }
});
