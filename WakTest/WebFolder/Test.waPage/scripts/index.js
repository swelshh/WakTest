
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

//=============================================================================================================================================
	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		debugger; // TEST TEST TEST TEST
		var dateVal = $$("textField1").getValue();
		var momentObj = moment(dateVal);
		
		if (moment.isMoment(momentObj))
		{
			//Yay, we have a moment object
			var test = "success";
		}
		else
		{
			//Uh-oh
			var test = "failure";
		}		
	};// @lock
//=============================================================================================================================================


//=============================================================================================================================================
	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$("#textField1").datepicker("show");	//Bring up the datepicker object	
	};// @lock
//=============================================================================================================================================
	
	
//=============================================================================================================================================
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$(function() 
		{
			//Assign a datepicker to textField1
			//Also use the altField option to force it to update textField1 whenever the user makes a selection.
			//Note: I had to use the altField option because textField1 wasn't being updated whenever the user made a new slection.
			$("#textField1").datepicker({altField: "#textField1", altFormat: "yy-mm-dd"});
  		});
	};// @lock
//=============================================================================================================================================
	

// @region eventManager// @startlock
	WAF.addListener("textField1", "change", textField1.change, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
