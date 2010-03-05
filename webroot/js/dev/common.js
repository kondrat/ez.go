

$(document).ready( function(){
		var $alert = $('#flashMessage');
		if($alert.length) {
				var alerttimer = window.setTimeout(function () {
					$alert.trigger('click');
				}, 4500);
				$alert.animate({height: [$alert.css("line-height") || '52', 'swing']}, 400)
				//$alert.hide().slideDown('slow')
				.click(function () {
					window.clearTimeout(alerttimer);
					$alert.animate({height: '0'}, 400);
				});
		}
						
		$(".td").hover( function(){
			$(this).find(".ctrlPanel").show();
		},function(){
			$(this).find(".ctrlPanel").hide();
		}
		);
					

	
});

