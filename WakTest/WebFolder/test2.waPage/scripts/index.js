
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var datePicker = $$("container1");
		
		//show the date picker
		datePicker.show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		//setup the datePicker
		$( "#container1" ).datepicker({
			onSelect: function(date) {
				var momentObj = moment(date), //create a moment object from the selected date
					datePicker = $$("container1"),
					theBtn = $$("button1");

				//hide the date picker
				datePicker.hide();
				
				//we will pass the moment to something else,
				//but just as a test lets set the button
				//label
				theBtn.setValue(momentObj.format("MM/DD/YY"));
			},
			altFormat: "yy-mm-dd"
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
