define(function(){
	var controller = require("userflxFeatureController");
	var controllerActions = ["flxFeatureControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})