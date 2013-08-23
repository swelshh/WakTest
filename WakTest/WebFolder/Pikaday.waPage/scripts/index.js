
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var datepicker = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	datepicker.click = function datepicker_click (event)// @startlock
	{// @endlock


    var $datepicker = $('#datepicker').pikaday({
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });
    // chain a few methods for the first datepicker, jQuery style!
    $datepicker.pikaday('show').pikaday('nextMonth');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("datepicker", "click", datepicker.click, "WAF");
// @endregion
};// @endlock
