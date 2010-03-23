var tt;
var from = 'en';
var to = 'ru';

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
		
		
	//cards control panel ( edit del)				
		$(".td").hover( function(){
				$(this).find(".ctrlPanel").show();
			},function(){
				$(this).find(".ctrlPanel").hide();
			}
		);
		




	//front - back side switching
		$("#backButton").click(function() {
			
			$("#tableFront").removeClass("activeCardSide");
			$("#tableBack").addClass("activeCardSide");
			
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuFront").addClass("plusMenuBack");
			});			
		})

			
		$("#frontButton").click(function() {
			
			$("#tableBack").removeClass("activeCardSide");
			$("#tableFront").addClass("activeCardSide");			
			
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuBack").addClass("plusMenuFront");
			});
		})
		
	//lang switching
		$(".langSwitch").click(function(){
			to = $("#langFrom").text();
			from = $("#langTo").text();
			$("#langFrom").text(from);
			$("#langTo").text(to);
		});		


	//word submiting					
		$(".submitWord").click( function() {
			var userWord;
			userWord = $("#CardExt").attr('value');
			$(".mainWord").text(userWord);
			$("ul.nounTerms, ul.verbTerms, ul.adjecTerms").empty().addClass("hide").removeClass("ter");
			$("li.noun,li.verb,li.adjec").removeClass("dicSwitcherM dicActive");
			
			songWord = userWord;
			
						$.post(
							path+"/cards/getTransl",
							{"data[Card][ext]": userWord, "data[Card][langFrom]" : from, "data[Card][langTo]" : to },
					    	function(data){
									
											if( data.sentences ) {
											  //console.log(data.sentences);
											  var tem = data.sentences[0];
											  
											  $.each(tem, function(key, value) { 
  													if( key === 'trans' ) {
  														var translated = value;
  														$("#translation").text(	translated );												
  													}
  													
												});
											  
											 if( data.dict ) {
			
											  var dic = data.dict;
											  var type = null;
											  $(".rightSug").slideDown('fast');
											  
											  $.each(dic, function( keyD, valueD) {
											  	
											  	$.each(valueD, function(keyT, valueT) {
											  		
											  		
											  		if(keyT === 'pos' && valueT === 'noun'){
											  			type = 'noun';
											  			
											  		} else if (keyT === 'pos' && valueT === 'verb') {
											  			type = 'verb';										  			
											  		} else if (keyT === 'pos' && valueT === 'adjective') {
											  			type = 'adjec';										  			
											  		} 
											  		
											  		if( keyT === 'terms' && type === 'noun' ) {	
											  			alert("Kosayak");									  			
											  				$.each( valueT, function(keyN, valueN) {											  					
											  					$("ul.nounTerms").append('<li>'+ valueN+'</li>').addClass("ter");
											  				});
											  				$("li.noun").addClass("dicSwitcherM");											  														  			
											  		} else if(keyT === 'terms' && type === 'verb' ) {
											  				$.each( valueT, function(keyN, valueN) {											  					
											  					$("ul.verbTerms").append('<li>'+ valueN+'</li>').addClass("ter");
											  				});
											  				$("li.verb").addClass("dicSwitcherM");	
											  		} else if(keyT === 'terms' && type === 'adjec' ) {
											  				$.each( valueT, function(keyN, valueN) {											  					
											  					$("ul.adjecTerms").append('<li>'+ valueN+'</li>').addClass("ter");
											  				});	
											  				$("li.adjec").addClass("dicSwitcherM");
											  		}
											  												  		
											  	});
											  	
											  });
											  
											  $(".dicSwitcherM:first").addClass("dicActive");
											  $(".ter:first").removeClass("hide");
											} else {
												$(".rightSug").hide();
											}
											  											  
											  
											  /*
												$('#usernameWrap').addClass("error");
												$('#response').addClass('error-message');
												$('#usernameWrap input').addClass('form-error');
												*/
												
											} else {
											  
											}					
									
					      },
					      "json"
          	);
			
			
			//official google
			//initialize(userWord);
			return false;
		});
		
		

		$(".dicSwitcherM").live('mouseover mouseout',function(event){		
			  if (event.type == 'mouseover') {
			    $(this).addClass("dicHover");
			  } else {
			    $(this).removeClass("dicHover");
			  }
		});

		$(".dicSwitcherM").live('click',function(){
			$(".dicSwitcherM").removeClass("dicActive");
			$(this).addClass("dicActive");
			var i = $(this).index();
			$(".dicTerms ul").addClass("hide");
			$(".dicTerms ul:eq("+i+")").removeClass("hide");
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
