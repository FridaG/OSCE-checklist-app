
Template.examView.rendered = function (event, template) {
	//var _id = Router.current().params['_id'];
	//var setCurrentCount = Session.get(_id+"currentSectionCount");
	
		//Session.set(_id + "currentSectionCount", 0);
		//thisSessionId = new ReactiveVar(0);
	
	

	



};

Template.examView.helpers({
	completedTask:function(sectionName, sectionItem){ //check if a task has been completed
		var itemId = encodeURIComponent(sectionName+sectionItem);
		var completedTask = Session.get(itemId);

		
		return completedTask;

	},

	completedSection:function(examName, sectionName){
		var sectionId = encodeURIComponent(examName+sectionName);
		var completedSection = Session.get(sectionId);
		return completedSection;

	}
})




Template.examView.events({

	'click .osceItem': function(event, template){

		var thisSessionId =Session.get("thisSessionId");
		var _id = Router.current().params['_id'];

		if (thisSessionId != _id){
			
			Session.set("thisSessionId", _id);
			console.log('Thanks for taking a gander under the hood.  Please contact me on my github page, https://github.com/FridaG');

			Session.set(_id +"totalSectionCount", Template.currentData().sections.length);

			var thisExam = Template.currentData();
			//this.id = new ReactiveVar(_id);

			var sections = thisExam.sections;
			var examName = thisExam.name;

				sections.forEach(function(section){
					//var sessionCount = Session.get(_id+"totalSectionCount");
					//Session.set(_id+"totalSectionCount", sessionCount++);
					//console.log(section.sectionItems.length);
					var sectionItems = section.sectionItems;
					var sectionName = section.sectionName;
					var subsectionCount = 0; //count total number of checkmarks for each subsection
					var sectionCount = 0; //count total marks for this section

					sectionItems.forEach(function(sectionItem){ //iterate through each section of exam, eg intro, position, etc

						if (sectionItem.subsection){ //are there subsections?  eg. Face > eyes and mouth
							
							var subsectionName = sectionItem.subsection;
							var subsectionItems = sectionItem.subsectionItems;
							
							subsectionItems.forEach(function(subsectionItem){
								//console.log(subsectionCount + " - "+ subsectionName + " " + subsectionItem);
								subsectionCount++;
								
							});
						}
						else{ //normal section, eg Blood pressure
							//console.log(sectionCount + " - normal section "+ sectionName+sectionItem);
							//console.log(sectionItem);
							sectionCount++;

						};
						
					});
					if(subsectionCount > 0){
						var sectionId = encodeURIComponent(examName+sectionName);
						Session.set(sectionId+"FullCount",subsectionCount );
						Session.setDefault(sectionId+"Count",0 );

						//console.log("this section had " + subsectionCount + " subsections");
						
					}
					else{
						var sectionId = encodeURIComponent(examName+sectionName);
						Session.setDefault(sectionId+"Count",0 );
						Session.set(sectionId+"FullCount",sectionCount );
						//console.log("this section had " + sectionCount +" sections. ");
						
					}

				});


		}

		
		var itemId = $(event.currentTarget).attr("id");
		var sectionId = $(event.currentTarget).attr("sectionId");
		var completedTask = Session.get(itemId);

		if (completedTask == 'checked'){
			Session.set(itemId, null);
			var currentCount = Session.get(sectionId+"Count") -1;
			Session.set(sectionId+"Count",currentCount);
			var FullCount = Session.get(sectionId+"FullCount");
			if (currentCount < FullCount){
				Session.set(sectionId, null);
			}

		}
		else{
			Session.set(itemId, 'checked');
			var currentCount = Session.get(sectionId+"Count") +1;
			Session.set(sectionId+"Count",currentCount);
			
			var FullCount = Session.get(sectionId+"FullCount");
			
			if (currentCount == FullCount){
				Session.set(sectionId, 'completedSection');
				
				var currentSectionCount = Session.get(_id+"currentSectionCount");
					
					if (currentSectionCount){
						Session.set(_id+"currentSectionCount", currentSectionCount+1);
						console.log(Session.get(_id+"currentSectionCount"));
					}
					else{
						Session.set(_id+"currentSectionCount", 1);
						console.log(Session.get(_id+"currentSectionCount"));
					}
					
				
				
				var totalSectionCount = Session.get(_id+"totalSectionCount");

				if( currentSectionCount == totalSectionCount){ 
					//alert("you passed!");
				}

			}
			
		};

	},

	'click .showMistakes':function(){
		$( ".osceItem" ).not( ".checked, .subsection" ).css( "color", "red" );
		$( ".checked" ).css( "opacity", "0.7" );
		

	},

	'click .reset':function(){
		Tracker.autorun(function(){
			Object.keys(Session.keys).forEach(function(key){ 
				Session.set(key, null); })
			

		});

		$( ".osceItem" ).not(".subsection").css( "color", "#8CEADA" );
		$( ".checked" ).css( "opacity", "1" );
		

	}
});





