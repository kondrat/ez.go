var tt;
var from = 'en';
var to = 'ru';
var song;
var noSound;

$(document).ready( function(){
	
	  $("#CardExt").val('');
	  
	  
		var $alert = $('#flashMessage');
		if($alert.length) {
				var alerttimer = window.setTimeout(function () {
					$alert.trigger('click');
				}, 4500);
				$alert.animate({height: [$alert.css("line-height") || '52', 'swing']}, 400).click(function () {
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
    //front
		$("#frontButton").click(function() {
			
			$("#tableBack").removeClass("activeCardSide");
			$("#tableFront").addClass("activeCardSide");
			$(".plusMenuWord").addClass("plusMenuActive");
			
			$(".plusMenuFront").show();
			$(".plusMenuBack").hide();
			
			$(".sideToEdit:last").hide();
			$(".sideToEdit:first").show();			
			
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuBack").addClass("plusMenuFront");
			});
		});


		$("#frontButton").trigger('click');
		
		//back
		$("#backButton").click(function() {
			
			$("#tableFront").removeClass("activeCardSide");
			$("#tableBack").addClass("activeCardSide");
			
			$(".plusMenuFront").hide();
			$(".plusMenuBack").show();
			
			
			
			
			$(".sideToEdit:first").hide();
			$(".sideToEdit:last").show();	
						
			$(".plusMenu").each(function(){
				$(this).removeClass("plusMenuFront").addClass("plusMenuBack");
			});	
			
			
			console.log( $("#CardExt").val() );
			$("#CardExt").val($("#translation").text());
			
			
					
		});

			
		
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
			$(".dicTerms ul").empty().addClass("hide").removeClass("ter");
			$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive");
			
	//trimm and check uesr word;		
			songWord = userWord;
			song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+songWord+".mp3";
			
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
												  var typeW = null;
												  $(".rightSug").slideDown('fast');
												  
												  $.each(dic, function( keyD, valueD) {												  	
												  	$.each(valueD, function(keyT, valueT) {												  		
												  		if(keyT === 'pos') {
												  			switch(valueT){
													  			case('noun'):
													  				typeW = 'noun';	
													  				break;										  			
													  			case('verb'):
													  				typeW = 'verb';
													  				break;										  			
													  			case('adjective'):
													  				typeW = 'adjective';
													  				break;											  				
													  			case('adverb'):
													  				typeW = 'adverb';
													  				break;
													  			case('pronoun'):
													  				typeW = 'pronoun';
													  				break;
													  			case('conjunction'):
													  				typeW = 'conjunction';
													  				break;
													  			case('preposition'):
													  				typeW = 'preposition';
													  				break;
													  			case('article'):
													  				typeW = 'article';
													  				break;
													  			case('numeral'):
													  				typeW = 'numeral';
													  				break;
													  			default:
													  				break;											  				
												  			}										  			
												  		} 
												  	
												  		if( keyT === 'terms') {	
												  				$.each( valueT, function(keyN, valueN) {											  					
													  					$("ul."+typeW+"Terms").append('<li>'+ valueN+'</li>').addClass("ter");
													  			});
													  			$("li."+typeW ).addClass("dicSwitcherM");											  			
												  				typeW=null;
												  		}											  											  		
												  	});
												  	
												  });
												  
												  $(".dicSwitcherM:first").addClass("dicActive");
												  $(".ter:first").removeClass("hide");
												} else {
													$(".rightSug").hide();
												}

												//ok, go to side B 
											
												$("#backButton").trigger('click');
												
												
												
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
