;(function($) {
	"use strict";
	$.fn.wfH5Preview = function(options) {
		var html = [
			'<div class="wf-h5-pre-box">',
			'  <div class="wf-h5-pre-wp">',
			'	<div class="phone-top"></div>',
			'	<div class="phone-status-bar"></div>',
			'	<div class="phone-title">' + options.title + '</div>',
			'	<div class="phone-body">',
			'	  <iframe src="' + options.url + '" frameborder="0" scrolling="yes"></iframe>',
			'	</div>',
			'	<div class="phone-btm"></div>',
			' </div>',
			'</div>'
	    ].join('');
		$(this).html(html);
	};
})(jQuery);