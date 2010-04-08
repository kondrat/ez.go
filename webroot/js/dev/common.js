var card = {"a":{},"b":{}};
//console.log(card);
var tt;
var from = 'en';
var to = 'ru';
var backDirect = false;
var song;
var noSound;

$(document).ready( function(){
		
		var cardTable = $("div.cardEditor");
		var hideArrow = $(".hideArrow");
		//cleaning after reload
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
		

		var prev_tooltip;// = $(".userActions").text();
		useraction_tooltip(".plusMenuBack,.plusMenuFront");	


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

			$(".plusMenuWord").trigger('click');

			$(".inputSring").removeClass("inputSring");
			$("#mainWord").addClass("inputSring");	
			$("#CardExt").val($(".inputSring").text());		

			
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
			
			//$(".plusMenuBack:first").addClass("plusMenuActive");
			$(".plusMenuTransl").trigger('click');
			
			$(".inputSring").removeClass("inputSring");
			$("#translation").addClass("inputSring");
			$("#CardExt").val($("#translation").text());
	
					
		});

	


	var letOk = false;
	$('#CardExt').keypress( function(e) {
		console.log(e.which);
		
	  var chr = (String.fromCharCode(e.which));
	  rexp = /([^\w0-9\s\.\?,'-])/; 
	  if( rexp.test(chr) && e.which !== 8 && e.which !== 0 ) {
	  	//console.log('falseChr');
	  	letOk = false;
	    return false;
	  } else {
	  	letOk = true;
	  }
 
	});	
	
	$('#CardExt').keyup( function(e) {
		if ( letOk = true) {
			
	  	var textIn = $("#CardExt").val();
	  	
	  	$(".inputSring").trigger("myFirstEvent", textIn);
	  		
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
	
		var bgPos;
		$(".langSwitch").hover(function(){
			$(this).addClass("ttTest");
			},function(){
				$(this).removeClass("ttTest");
			}
		); 
	
		$(".langSwitch").click(function(){
			$(this).removeClass("ttTest");
			if( !backDirect ) {
				to = $("#langFrom").text();
				from = $("#langTo").text();
				$(".langToFromWrapper").addClass("backDir");
				backDirect = true;
			} else {
				to = $("#langTo").text();
				from = $("#langFrom").text();
				$(".langToFromWrapper").removeClass("backDir");
				backDirect = false;
			}			
		});

		
		
				
    $("#langTo").toggle(function(){
      
       $(".langTable").show('normal');
      },
      function(){
         $(".langTable").fadeOut();
      }
    );
    $("#langFrom,.closeLangTable").click(function() {
      $("#langTo").trigger('click');
    });


	//word submiting					
		$("#submitTranslId").click( function() {
			var userWord;
			userWord = $.trim($("#CardExt").attr('value'));

			$(".inputSring").text(userWord);
			//dictionary preparation
			$(".additionalRes").hide();
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
													  					$("ul."+typeW+"Terms").append('<li>'+ valueN+'</li>').addClass("ter");
													  			});
													  			$("li."+typeW ).addClass("dicSwitcherM");											  			
												  				typeW=null;
												  		}											  											  		
												  	});
												  	
												  });
												  
												  $(".dicSwitcherM:first").addClass("dicActive");
												  $(".ter:first").removeClass("hide");
												  $(".additionalRes").show();
												} else {
													
												}

												//ok, go to side B 
												
											  var sen = data.sentences;
											  var translatedWord = '';
											  $.each(sen, function(key, value) { 
														$.each(value, function(keyIn, valIn){
															if( keyIn === 'trans' ) {
																translatedWord += valIn; 																										
															} 	
  													});											
												});												
												$(".topSug li").text(translatedWord);
												
												if ($("#CardOne").attr("checked") === true) {
													//alert("true: "+$("#CardOne").attr("checked"));
													$("#translation").text(	translatedWord );
													$("#backButton").trigger('click');
//glupost!!!!!!!!!!!!!
													
												} else {
													//alert("false: "+$("#CardOne").attr("checked"));
													
												}
												

												
												
												
												if(userWord != translatedWord) {
		
													if( cardTable.css('width') !== "790px" ) {
														cardTable.animate({
																width: '790px'
															},
															'linear',
															function(){
																$(".rightSug").fadeIn('fast');
															}
														);
														hideArrow.show().removeClass("hideArrowR").addClass("hideArrowL");
													}
												} else {
													$(".rightSug").hide();
														if( cardTable.css('width') === "790px" ) {
															
															cardTable.animate(
																{
																	width: '550px'
																}
															);														
														}
														hideArrow.hide().removeClass("hideArrowL hideArrowR");
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


		$(".dicTerms li,.topSug li").live('click',function(){
			var toIns = $(this).text();
			$("#CardExt").val(toIns);			
			$(".inputSring").trigger("myFirstEvent", toIns);			
		});


















		
		
		
		$(".submitTranslate").click( function() {
			var userTran;
			tt = userTran = $("#UserWord").attr('value');
			initialize(tt);
			return false;
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
			//$(".tempTest").text( valCardExt );
			
			if (valCardExt.length > 0) {
				$("span.inputSring").prev().show();
			}else{
				$("span.inputSring").prev().hide();
			}			
		});		
		

		$(".closeCardTable").click(function(){
			$(".cardEditor").fadeOut();
		});		
//to del
		/*
		$(".threeWaysOne").click(function(){
			$(".cardEditor").fadeIn();
		});
		*/

		//arrow class 
		$(".hideArrow").click(function(){	
				var thisArrow = $(this);
				if ( thisArrow.hasClass("hideArrowL") ) {
						
					$(".rightSug").fadeOut( function() {
						cardTable.animate(
							{
								width: '550px'
							},
							function(){
								thisArrow.removeClass("hideArrowL").addClass("hideArrowR");	
							}
						);																							
  				});
  															
				}	else {				
					cardTable.animate(
						{
							width: '790px'
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

		var fileTextUploadWrapper =  $(".fileTextUploadWrapper");
		$(".fileTextUploadMenu").toggle(function(){
				fileTextUploadWrapper.slideDown('fast');
			},
			function(){
				fileTextUploadWrapper.slideUp('fast');
		});

// http://vremenno.net/examples/x-button-on-text-input2/
// http://www.simplecoding.org/javascript-poleznye-sobytiya.html
	
});


			




				function useraction_tooltip(target_items){
					$(target_items).each(function(i){
						var my_tooltip = $(this).attr('title');					
						$(this).removeAttr("title").mouseover(function(){
							$(".userActions").text(my_tooltip).addClass("userActionTip");												
						}).mouseout(function(){
							$(".userActions").text(prev_tooltip).removeClass("userActionTip");
						}).click(function(){							
							$(".userActions").text(my_tooltip);
							prev_tooltip = my_tooltip;
						});
					});
				}





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
    			
		$(function() {
			$(".cardEditor").draggable( { handle:"div.moveCardTable",zIndex: 2700,addClasses: false } );
		});

    //adding cursor pointer to all clicables elements;   
    (function($){
      $.event.special.click = {
        setup: function() {       	
        	if( !$(this).hasClass("cardEditor") ) {
          	$(this).css('cursor','pointer');
          }
          return false;
        },
        teardown: function() {
          $(this).css('cursor','');
          return false;
        }
      }
    })(jQuery);    			
		




    			
//experiment
/*
//var baseurl = 'http://search.yahooapis.com/ImageSearchService/V1/imageSearch?appid=YahooDemo&output=json&query=';
var baseurl = 'http://translate.google.com/translate_a/t?client=t&hl=ru&sl=en&tl=ru&otf=1&pc=0&text=';
//var baseurl = 'http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&sl=en&tl=ru&restrict=pr%2Cde&client=te&q=';
function callback(data){};
 function search() {
     var search = $("#search").val();
     console.log(search);
     var surl = baseurl + escape(search) + '&callback=?'
     $.getJSON(surl, function(data) {
     	//data = '(' + data + ')';

     	var res = '<h1>Search for '+search+'</h1>';
     	$("#result1").html(res);
     	console.log('('+data+')');
     	console.log(data.query);
     	
          var res = '<h1>Search for '+search+'</h1>'
          res += '<p>There were '+data.ResultSet.totalResultsAvailable+' results.</p>'
          for(var i=0; i<data.ResultSet.Result.length; i++) {
               var result = data.ResultSet.Result[i]
               var resultStr = '<img src="'+result['Thumbnail']['Url']+'" align="left">';
               resultStr += '<a href="'+result['ClickUrl']+'">'+result['Title']+'</a><br clear="left"/>'
               res+=resultStr
           }
          $("#result").html(res)
         
      })
 }

 $(document).ready(function() {
     $("#searchBtn").click(search)
 });
 */
