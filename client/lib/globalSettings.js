Template.registerHelper('uriSet', function(uri){
	return encodeURIComponent(uri);
});

Template.registerHelper('sectionIdSet', function(examName, sectionName){
	var sectionId = examName+sectionName;
	return encodeURIComponent(sectionId);
});


Template.registerHelper('itemId', function(section, sectionItem){
	var itemId = section+sectionItem;
	return encodeURIComponent(itemId);
});

Template.registerHelper('last', function(list, elem) {
        return _.last(list) === elem;
    }
);

