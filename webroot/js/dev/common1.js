


var noSound;

$(document).ready( function(){

		var com1 = {
			//alert message object
			alertMessage: '',
			//card editor object
			cardTable :'',
			//small arrow hide - show translation object
			hideArrow:'',
			//checking the letter in the input string if not OK - don't let it in
			correctLetter: '',
			//look for quick mode flag
			quickModeChecked: '',
			activeSide: '',
			//side on which we have translated our string or word
			tranlslSide:'',
			//change lang switching arrow direction
			backLangDirect: false,
			//lang pair initial
			from: 'en',
			to:'ru'
		};


		//flash alert message 	  
		com1.alertMessage = $('#flashMessage');
		
		if(com1.alertMessage.length) {
				var alerttimer = window.setTimeout(function () {
					com1.alertMessage.trigger('click');
				}, 4500);
				com1.alertMessage.animate({height: [com1.alertMessage.css("line-height") || '52', 'swing']}, 400).click(function () {
					window.clearTimeout(alerttimer);
					com1.alertMessage.animate({height: '0'}, 400);
					com1.alertMessage.css({'border':'none'});
				});
		}

		
		com1.cardTable = $("div.cardEditor");
		com1.hideArrow = $(".hideArrow");
		
		//cleaning after reload
	  $("#CardExt").val('');

	
	//cards control panel ( edit del)				
		$(".td").hover( function(){
				$(this).find(".ctrlPanel").show();
			},function(){
				$(this).find(".ctrlPanel").hide();
			}
		);
		
		useraction_tooltip(".plusMenuBack,.plusMenuFront");	


	//front - back side switching
    //front
   
		$("#frontButton").click(function() {
			
			com1.activeSide = 'a';
			$(".langToFromWrapper").removeClass("backDir");
			

			com1.to = $("#langTo").text();
			com1.from = $("#langFrom").text();
			
			if ( com1.tranlslSide === 'a' ){
				$(".dicTerms, .topSug").removeClass("insertWordClick");
			} else if (com1.tranlslSide === 'b') {
				$(".dicTerms, .topSug").addClass("insertWordClick");
			}
			
			$("#tableBack").removeClass("activeCardSide");
			$("#tableFront").addClass("activeCardSide");
			$(".plusMenuWord").addClass("plusMenuActive");
			
			$(".plusMenuFront").show();
			$(".plusMenuBack").hide();
			
			$(".sideToEdit:last").hide();
			$(".sideToEdit:first").show();			

			$(".plusMenuWord").trigger('click');

			$(".inputSring").removeClass("inputSring");
			$("#mainWord").addClass("inputSring");	
			$("#CardExt").val($(".inputSring").text());		

			
		});

		$("#frontButton").trigger('click');
	
				
		//back
		$("#backButton").click(function() {
			
			com1.activeSide = 'b';
			
			$(".langToFromWrapper").addClass("backDir");

			com1.to = $("#langFrom").text();
			com1.from = $("#langTo").text();

			
			if ( com1.tranlslSide === 'b' ){
				$(".dicTerms, .topSug").removeClass("insertWordClick");
			} else if (com1.tranlslSide === 'a') {
				$(".dicTerms, .topSug").addClass("insertWordClick");
			}
						
			$("#tableFront").removeClass("activeCardSide");
			$("#tableBack").addClass("activeCardSide");
			
			$(".plusMenuFront").hide();
			$(".plusMenuBack").show();		
			
			$(".sideToEdit:first").hide();
			$(".sideToEdit:last").show();	
			

			$(".plusMenuTransl").trigger('click');
			
			$(".inputSring").removeClass("inputSring");
			$("#translation").addClass("inputSring");
			$("#CardExt").val($("#translation").text());
					
		});

	


	com1.correctLetter = false;
	
	$('#CardExt').keypress( function(e) {

	  var chr = (String.fromCharCode(e.which));
	  rexp = /([^\w0-9\s\.\?,'-])/; 
	  if( rexp.test(chr) && e.which !== 8 && e.which !== 0 ) {
	  	com1.correctLetter = false;
	    return false;
	  } else {
	  	com1.correctLetter = true;
	  }
 
	});	

	com1.quickModeChecked = $("#CardQuick").attr("checked");

	$("#CardQuick").click(function(){
		com1.quickModeChecked = $(this).attr("checked");
	});


			
		$('#CardExt').keyup( function(e) {
			if ( com1.quickModeChecked === true) {			
				if ( com1.correctLetter = true) {		
			  	var textIn = $("#CardExt").val();	  	
			  	$(".inputSring").trigger("myFirstEvent", textIn);	  		
			  }
			}
		});
	



	$(".plusMenuFront,.plusMenuBack").click(function(){
			$(".plusMenuActive").removeClass("plusMenuActive");
			$(this).addClass("plusMenuActive");			
	})

	$(".plusMenuTransl").click(function(){
			$(".inputSring").removeClass("inputSring");
			$("#translation").addClass("inputSring");	
			$("#CardExt").val($("#translation").text()).focus();	
	});
	$(".plusMenuDefin").click(function(){
			$(".inputSring").removeClass("inputSring");
			$("#definTran span:last").addClass("inputSring");
			$("#CardExt").val($("#definTran span:last").text()).focus();		
	});
	$(".plusMenuExample").click(function(){
			$(".inputSring").removeClass("inputSring");
			$("#contextTran span:last").addClass("inputSring");
			$("#CardExt").val($("#definTran span:last").text()).focus();		
	});
	$(".plusMenuSynonim").click(function(){
			$(".inputSring").removeClass("inputSring");
			$("#synonimTran span:last").addClass("inputSring");
			$("#CardExt").val($("#synonimTran span:last").text()).focus();		
	});

			
		
	//lang switching
	
		$(".langSwitch").hover(function(){
			$(this).addClass("changeLangDirect");
			},function(){
				$(this).removeClass("changeLangDirect");
			}
		); 
	
		$(".langSwitch").click(function(){
			
			$(this).removeClass("changeLangDirect");
			
			if (  com1.activeSide === 'a' ) {
				$("#backButton").trigger('click');
			} else if ( com1.activeSide === 'b' ) {
				$("#frontButton").trigger('click');
			}
		});

		
		
				
    $("#langTo").toggle(function(){
      
       $(".langTable").show();
      },
      function(){
         $(".langTable").fadeOut();
      }
    );
    $("#langFrom,.closeLangTable").click(function() {
      $("#langTo").trigger('click');
    });


	//word submiting for translation

//CHEck if word is empty or not!!!!!!!!!

						
		$("#submitTranslId").click( function() {
			
			var userWord = $.trim($("#CardExt").attr('value'));
			var userWordLower = userWord.toLowerCase();
			
			//double of the input.
			$(".inputSring").text(userWord);
			$("#transFor").text(userWord);
			
			
			
			//dictionary preparation
			$(".additionalRes").hide();
			$(".dicTerms ul").empty().addClass("hide");
			$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive");
			//$("#transFor").empty();




			
	//trimm and check uesr word;		
			com.songWord = userWordLower;
			
			com.song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+com.songWord+".mp3";
			
						$.post(
							path+"/cards/getTransl",
							{"data[Card][ext]": userWord, "data[Card][langFrom]" : com1.from, "data[Card][langTo]" : com1.to },
							
					    	function(data){
									
											if( data.sentences ) {
											  //console.log(data.sentences);
										  
												 if( data.dict ) {
				
												  var dic = data.dict;
												  var typeW = null;
												  
												  
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
													  					$("ul."+typeW+"Terms").append('<li>'+ valueN+'</li>');
													  			});
													  			$("li."+typeW ).addClass("dicSwitcherM");											  			
												  				typeW=null;
												  		}											  											  		
												  	});
												  	
												  });
												  
												  $(".dicSwitcherM:first").addClass("dicActive");
												  $(".dicTerms ul:eq(0)").removeClass("hide");
												  $(".additionalRes").show();
												} else {
													
												}

												//ok, go to side B 
												
											  var sen = data.sentences;
											  var translatedSentence = '';
											  $.each(sen, function(key, value) { 
														$.each(value, function(keyIn, valIn){
															if( keyIn === 'trans' ) {
																translatedSentence += valIn; 																										
															} 	
  													});											
												});												
												$(".topSug li").text(translatedSentence);
												
												com1.tranlslSide = com1.activeSide;
												$(".insertWordClick").removeClass("insertWordClick");

												

												
												
												
												if(userWord != translatedSentence) {
		
													if( com1.cardTable.css('width') !== "870px" ) {
														com1.cardTable.animate({
																width: '870px'
															},
															'linear',
															function(){
																$(".rightSug").fadeIn('fast');
															}
														);
														com1.hideArrow.show().removeClass("hideArrowR").addClass("hideArrowL");
													}
												} else {
													$(".rightSug").hide();
														if( com1.cardTable.css('width') === "870px" ) {
															
															com1.cardTable.animate(
																{
																	width: '630px'
																}
															);														
														}
														com1.hideArrow.hide().removeClass("hideArrowL hideArrowR");
												}
												
											} else {
											  
											}					
									
					      },
					      "json"
          	);
			
			
			//official google
			//initialize(userWord);
			return false;
		});
		
		//inserting translation result in inputstring
		$(".insertWordClick li").live('click',function(){
			var toIns = $(this).text();
			$("#CardExt").val(toIns);			
			$(".inputSring").trigger("myFirstEvent", toIns);			
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

















	
		$(".submitMore").click( function() {
			var userMore;
			userMore = $("#UserExt").attr('value');
			
			
			$(".contextTran").text(userMore);
			
			
			
			return false;
		});




		//more controls
		

	
	
	
		$("#submitWrodId").click(function(){		
			var valCardExt = $("#CardExt").val();		
			$(".inputSring").trigger("myFirstEvent", valCardExt);					 		  	
		});

		
		$(".inputSring").live("myFirstEvent",function(e, valCardExt){
			
			$(".inputSring").text(valCardExt);
			
			if (valCardExt.length > 0) {
				$("span.inputSring").prev().show();
			}else{
				$("span.inputSring").prev().hide();
			}			
		});		
		

		$(".closeCardTable").click(function(){
			$(".cardEditor").fadeOut();
		});		
		
		


		//arrow class 
		$(".hideArrow").click(function(){	
				var thisArrow = $(this);
				if ( thisArrow.hasClass("hideArrowL") ) {
						
					$(".rightSug").fadeOut( function() {
						com1.cardTable.animate(
							{
								width: '630px'
							},
							function(){
								thisArrow.removeClass("hideArrowL").addClass("hideArrowR");	
							}
						);																							
  				});
  															
				}	else {				
					com1.cardTable.animate(
						{
							width: '870px'
						},
						function(){
							$(".rightSug").fadeIn();
							thisArrow.removeClass("hideArrowR").addClass("hideArrowL");
						}
					);																
				}											  		 											
		});
				
		$(".moveCardTable").hover( function(){
			$(this).css({'background-position':'0 -32px'});
			},function(){
				$(this).css({'background-position':'0 0'});
			}
		);		
		
		
		$(".sideToEdit").click(
			function(){
				if ($("#tableFront").hasClass("activeCardSide")) {
					$("#backButton").trigger('click');
				} else {
					$("#frontButton").trigger('click');
				}				
			}
		);
		


		//page upload text
		
		$(".enlarge").click(function(){
			
			$(".textUpload").animate(
				{
					height: "+=150px"
				},
				function(){
					$(".decrease").fadeIn();
				}
			);
		});
		
		$(".decrease").click(function(){
			if( $(".textUpload").height() >= 300 ){
				$(".textUpload").animate(
					{
						height: "-=150px"
					},
					function(){
						if($(this).height() <=150 ) {
							$(".decrease").fadeOut();	
						}
					}
				);
			} 
		});




    //card Ajax save;

    
    
    $("#saveCardMain").click(function(){

    	
	    var cardObj = {
	    								"data[Theme][id]": themeName.data('id'),
	    								"data[Theme][theme]": themeName.data('theme'),
	    								"data[Card][word]": $('#mainWord').text(),
	    								"data[Card][tr]" : $('#translation').text(),
	    								"data[Card][cont]" : $('#contextTran span:last').text(),
	    								"data[Card][def]" : $('#definTran span:last').text(),
	    								"data[Card][syn]" : $('#synonimTran span:last').text() 
	    							};
    							
      $.ajax({
        type: "POST",
        url: path+"/cards/saveCard",
        dataType: "json",
        data: cardObj,
        success: function(data) {
        	
					userReg = 1;
					
        	if ( data.stat === 1 ) {        		
          	$('.newCards').prepend('<li></li>').find('li:first').text(data.word).data(cardObj).css({'color':'red'}).next().css({'color':'blue'});
          	
          	$('#mainWord,#translation,#contextTran span:last,#definTran span:last,#synonimTran span:last').empty();
          	$('#CardExt').val('');
          	
			 			$(".additionalRes").hide();
						$(".dicTerms ul").empty().addClass("hide");
						$("ul.rSugTabs li").removeClass("dicSwitcherM dicActive"); 
						
						$(".rightSug").hide();
							if( com1.cardTable.css('width') === "870px" ) {
								
								com1.cardTable.animate(
									{
										width: '630px'
									}
								);														
							}						
						com1.hideArrow.hide().removeClass("hideArrowL hideArrowR");	
							
						if (data.theme){
							themeName.data('id',data.themeId);
							themeName.data('theme',data.themeName);
						}												        	
          	flash_message('saved','flok');
          	
          } else {
          	
          }
          
          
        },
        error: function(){
            $('.tempTest').html('Problem with the server. Try again later.');
        }
      });
    });


		$(".newCards li").live('mouseover mouseout',
			function(event){
			  if (event.type == 'mouseover') {
    			//alert($(this).data().toSource());
			  } else {
			    //alert('stop');
			  }			
			}
		);
	
});//end of file











//old
/*		
		$(".submitTranslate").click( function() {			
			var userTran;
			tt = userTran = $("#UserWord").attr('value');
			initialize(tt);
			return false;
		});
*/
// http://vremenno.net/examples/x-button-on-text-input2/
// http://www.simplecoding.org/javascript-poleznye-sobytiya.html