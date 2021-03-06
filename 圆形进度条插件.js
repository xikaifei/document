;
(function($) {
	$.fn.extend({
		CircularProgressBar: function(options) {
			var defaults = {
				show:true,
				size: 200,
				fontSize:32,
				pieSize: 20,
				proportion: 88,
				pieBg: '#eee',
				pieColor: '#333'
			};
			options = $.extend({}, defaults, options);
			return $(this).each(function() {
				$(this).append('<div class="_pieLeft"><p></p></div><div class="_pieRight"><p></p></div><div class="_pieMask">'+options.proportion+'%</div>');
				$(this).find('*').css({
					'-webkit-box-sizing': 'border-box',
					'-moz-box-sizing': 'border-box',
					'-o-box-sizing': 'border-box',
					'box-sizing': 'border-box',
					'margin': '0',
					'padding': '0'
				});
				$(this).css({
					'-webkit-box-sizing': 'border-box',
					'-moz-box-sizing': 'border-box',
					'-o-box-sizing': 'border-box',
					'box-sizing': 'border-box',
					'width': options.size + 'px',
					'height': options.size + 'px',
					'border-width': options.pieSize + 'px',
					'border-color': options.pieBg + '',
					'border-style': 'solid',
					'border-radius': '50%',
					'position': 'relative'
				});
				$(this).find('._pieMask').css({
					'top':-options.pieSize + 'px',
					'left':'0',
					'right':'0',
					'text-align':'center',
					'line-height': options.size + 'px',
					'font-size':options.fontSize+'px',
					'color':options.pieColor,
					'position': 'absolute',
					
				});
				$(this).find('._pieLeft,._pieRight').css({
					'width': options.size / 2 + 'px',
					'height': options.size + 'px',
					'position': 'absolute',
					'top': -options.pieSize + 'px',
					'overflow': 'hidden',
					'left': -options.pieSize + 'px'
				});
				$(this).find('._pieRight').css({
					'left': 'auto',
					'right': -options.pieSize + 'px'
				});
				$(this).find('p').css({
					'width': options.size + 'px',
					'height': options.size + 'px',
					'border': options.pieSize + 'px solid',
					'border-radius': '50%',
					'top': '0',
					'position': 'absolute',
					'-webkit-transform': 'rotate(-135deg)',
					'-moz-transform': 'rotate(-135deg)',
					'-o-transform': 'rotate(-135deg)',
					'transform': 'rotate(-135deg)',
					'left': '0',
					'border-color': 'transparent transparent ' + options.pieColor + ' ' + options.pieColor,
				});
				$(this).find('._pieRight p').css({
					'left': 'auto',
					'right': '0',
					'border-color': options.pieColor + ' ' + options.pieColor + ' transparent transparent'
				});
				if(options.show){
					$(this).find('._pieMask').show();
				}else{
					$(this).find('._pieMask').hide();
				}
				var _pieNum = options.proportion;
				if(_pieNum <= 0) {
					_pieNum = 0;
				} else
				if(_pieNum >= 100) {
					_pieNum = 100;
				} else {
					_pieNum = _pieNum;
				}
				if(!isNaN(_pieNum)) {
					if(_pieNum <= 50) {
						$(this).find('._pieRight p').css({
							'-webkit-transform': 'rotate(' + (-135 + _pieNum * 3.6) + 'deg)',
							'-moz-transform': 'rotate(' + (-135 + _pieNum * 3.6) + 'deg)',
							'-o-transform': 'rotate(' + (-135 + _pieNum * 3.6) + 'deg)',
							'transform': 'rotate(' + (-135 + _pieNum * 3.6) + 'deg)'
						});
						$(this).find('._pieLeft p').css({
							'-webkit-transform': "rotate(-135deg)",
							'-moz-transform': "rotate(-135deg)",
							'-o-transform': "rotate(-135deg)",
							'transform': "rotate(-135deg)"
						});
					} else {
						$(this).find('._pieRight p').css({ 
							'-webkit-transform': "rotate(45deg)",
							'-moz-transform': "rotate(45deg)",
							'-o-transform': "rotate(45deg)",
							'transform': "rotate(45deg)"
						});
						$(this).find('._pieLeft p').css({
							'-webkit-transform':"rotate(" + (-135 + _pieNum * 3.6 - 180) + "deg)",
							'-moz-transform':"rotate(" + (-135 + _pieNum * 3.6 - 180) + "deg)",
							'-o-transform':"rotate(" + (-135 + _pieNum * 3.6 - 180) + "deg)",
							'transform':"rotate(" + (-135 + _pieNum * 3.6 - 180) + "deg)",
							});
					}
				} else {
					$(this).find('p').css({
						'-webkit-transform': "rotate(-135deg)",
						'-moz-transform': "rotate(-135deg)",
						'-o-transform': "rotate(-135deg)",
						'transform': "rotate(-135deg)"
					});
				}
			});
		}
	});

})(jQuery);