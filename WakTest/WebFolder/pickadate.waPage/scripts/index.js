
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		//get ref to our button
		var dateBtn = $$("button1");
		
		//create a moment and then stringify the moment
		var now = moment();
		var nowText = now.format("ddd, hA");
		
		//update the label of the button to our stringified moment text
		dateBtn.setValue(nowText);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
