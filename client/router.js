Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	progressDelay : 100,

});

Router.onBeforeAction(function() {  
  window.scrollTo(0, 0);
  this.next();  
});






Router.map(function(){
	this.route('home', {
		path:'/',
		waitOn: function() {
		    return Meteor.subscribe('OSCE');
		 },
	});

	Router.route('/exams/:name/:_id', function() {
		this.render('examView', {
			waitOn: function() {
			    return OSCE.findOne({_id:this.params._id});
			 },
			data: function(){
				return OSCE.findOne({_id:this.params._id});
			}
		});
	});



});




