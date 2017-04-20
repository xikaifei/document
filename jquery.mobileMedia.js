;(function($) {
	$.fn.extend({
		mobileMedia: function(options) {
			var defaults = {
				minWidth: 'min',
				maxWidth: 'max',
				rootSize: 20,
				windowSize: true,
				designWidth: 640
			};
			options = $.extend({}, defaults, options);
			return $(this).each(function() {
				var _this = $(this);

				function meta() {
					var winWidth = $(window).width();
					var fontProportion = options.designWidth / options.rootSize;
					var fontSize;
					if(options.minWidth != 'min') {
						$('body').css('min-width', options.minWidth + 'px');
					}
					if(options.maxWidth != 'max') {
						$('body').css({
							'max-width': options.maxWidth + 'px',
							'margin': '0 auto'
						});
					}
					if(winWidth <= options.minWidth) {
						fontSize = options.minWidth / fontProportion;
					} else
					if(winWidth >= options.maxWidth) {
						fontSize = options.maxWidth / fontProportion;
					} else {
						fontSize = winWidth / fontProportion;
					}
					_this.css('font-size',fontSize + 'px' );
				};
				meta();
				if(options.windowSize) {
					$(window).resize(function() {
						meta();
					})
				}
			})
		}
	})
})(jQuery)