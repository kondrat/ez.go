var tt;

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

		//front - back side switching
		$("#backButton").click(function() {
			$(this).addClass("activeSide");
			$("#frontButton").removeClass("activeSide");
			$("#tableBack .td").addClass("activeTside");
			$("#tableFront .td").removeClass("activeTside");
			
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuFront").addClass("plusMenuBack");
			});			
		})

			
		$("#frontButton").click(function() {
			$(this).addClass("activeSide");
			$("#backButton").removeClass("activeSide");
			$("#tableFront .td").addClass("activeTside");
			$("#tableBack .td").removeClass("activeTside");
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuBack").addClass("plusMenuFront");
			});
		})
		
		
					
		$(".submitWord").click( function() {
			var userWord;
			userWord = $("#CardExt").attr('value');
			$(".mainWord").text(userWord);
			
			
						$.post(
							path+"/cards/getTransl",
							{"data[Card][ext]": userWord },
					    	function(data){
									
											if( data.sentences ) {
											  //console.log(data.sentences);
											  var tem = data.sentences[0];
											  
											  $.each(tem, function(key, value) { 
  													//alert(key + ': ' + value); 
  													if( key === 'trans' ) {
  														var translated = value;
  														$("#translation").text(	translated );												
  													}
  													
												});
											  
											  
											  
											  /*
												$('#usernameWrap').addClass("error");
												$('#response').addClass('error-message');
												$('#usernameWrap input').addClass('form-error');
												*/
												
											} else {
											  //console.log('notOK');
											  /*
												$('#response').addClass('greenMessage');
												$('#response').css({'color':'green','font-weight':'bold'});
												//alert(data.typ+'2');
												*/
											}					
									
					      },
					      "json"
          	);
			
			
			//official google
			//initialize(userWord);
			return false;
		});
		
		
		
		
		
		
		
		
		
		$(".submitTranslate").click( function() {
			var userTran;
			tt = userTran = $("#UserWord").attr('value');
			
			//$(".mainTran").text(userTran);
			initialize(tt);
			return false;
		});
		
		$(".submitMore").click( function() {
			var userMore;
			userMore = $("#UserExt").attr('value');
			
			
			$(".contextTran").text(userMore);
			$(".addit").show();
			
			
			
			return false;
		});
	
});





			    function initialize(tt) {
			     // var text = document.getElementById("UserWord").innerHTML;
			      google.language.detect(tt, function(result) {
			        if (!result.error && result.language) {
			          google.language.translate(tt, result.language, "ru",
			            function(result) {
			            	var translated = document.getElementById("translation");
			            	if (result.translation) {
			              	translated.innerHTML = result.translation;
			            	}
			          });
			        }
			      });
    		}
