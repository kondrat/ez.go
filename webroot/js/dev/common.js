
//toDel
			$(document).ready(function() {
				$(".onlyTest").hide().addClass("hidden");
				$(".topSearch").mouseenter(function() {
					if ($(".onlyTest").hasClass("hidden")) {
			
						$(".onlyTest").removeClass("hidden").slideDown("fast");
						/*
						$(this).animate({
							paddingBottom: "3.5em"
						}, "fast");
						*/
					} else {
		
					}
				});
				$(".topSearch").mouseleave(function() {
					$(".onlyTest").addClass("hidden").slideUp("fast");
					/*
					$(this).animate({
							paddingBottom: "0em"
						}, "fast");
						*/
				});
			});

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
						

					

	
});

