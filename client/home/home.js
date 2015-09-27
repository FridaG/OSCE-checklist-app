Template.home.helpers({
    exams: function(){
      Meteor.subscribe("OSCE");
      return OSCE.find({});
    }
  });


  Template.home.events({
    

  });


 





