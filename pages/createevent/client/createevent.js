Template.createevent.events({
	'click .js-submit': function(event){
       event.preventDefault();
     
       const category = $(".js-category").val();
       const location = $(".js-location").val();
       const title = $(".js-title").val();
       const time = $(".js-time").val();
       const date = $(".js-date").val();
       const createdAt = new Date();
       const obj = {location,category,title,time,date,createdAt};
       console.dir(obj);
       console.log("were on our way!!");
       console.log("Form submitted");
       Pools.insert(obj);
       Router.go("browse");
    }
});
