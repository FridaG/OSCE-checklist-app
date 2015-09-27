Template.nav.rendered = function () {

	$('.ui.sidebar').first()
	  .sidebar('attach events', '.ui.fixed.menu')
	;
	$('.ui.fixed.menu')
	  .removeClass('disabled')
	;
};

Template.nav.helpers({
    exams: function(){
      Meteor.subscribe("OSCE");
      return OSCE.find({});
    }
  });


    

