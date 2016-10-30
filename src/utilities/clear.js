!function ($) {
	"use strict";


	// todo: at somepoint pass in options which toggle `select` selected options between:
	// 1. setting selected = 0
	// 2. setting selected = -1

	$.fn.clear = function() {
		return this.each(function() {

			var type = this.type;
			var tag = this.tagName.toLowerCase();

			if (type == 'text' || type == 'password' || tag == 'textarea') {
				this.value = '';
			} else if (type == 'checkbox' || type == 'radio') {
				this.checked = false;
			} else if (tag == 'select') {
				this.selectedIndex = 0;
			} else {
				return $(':input',this).clear();
			}
			$(this).trigger('status.input.prove', {
				status: 'validated',
				validation: 'reset'
			});
		});
	};
}(window.jQuery);