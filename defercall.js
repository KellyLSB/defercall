(function( $ ) {

	// Put the method on the jquery root object
	$.defercall = function() {

		// Create list of deferends
		var deferrends = [];

		// Loop through the args
		for(var i in arguments) {

			// Get the callback
			callback = arguments[i];

			if(!$.isFunction(callback))
				continue;

			// Create a new deference
			var deferred = $.Deferred();
			var completed = false;

			// Run call back and set completed
			completed = callback(deferred);

			// Resolve the defferend by default
			if(completed !== false) {
				if(deferred.state() !== 'rejected')
					deferred.resolve();
			}

			// Add the defered statement with the list of defferends
			deferrends.push(deferred);
		}

		// If no deferrends then add one to block done
		if(deferrends.length < 1)
			deferrends.push($.Deferred());

		// Return the joined deferrends
		return $.when.apply(null, deferrends);
	};

})( jQuery );