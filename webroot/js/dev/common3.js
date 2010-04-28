$(document).ready( function(){

		var pageChunkNumber = 0;

		var fileTextUploadWrapper =  $(".fileTextUploadWrapper");
		var fileTextUploadControl = $(".textUpload, .textUploadControl button");
		$(".fileTextUploadMenu").toggle(function(){
				$(".upDownSmallArrow").css({'background-position':'0 0'});
				fileTextUploadWrapper.slideDown('fast');
				fileTextUploadControl.attr("disabled","disabled");
				$(".enlarge").hide();
			},
			function(){
				$(".upDownSmallArrow").css({'background-position':'0 -19px'});
				fileTextUploadWrapper.slideUp('fast');
				fileTextUploadControl.attr("disabled", false);
				$(".enlarge").show();
		});

		var handlerDown = function() {
				var moveDown =  $(".pageChunkCur").outerHeight(true);
				//alert(moveDown);
				moveDown +=0;
				$(".pageChunkCur").next().show();
				$(".currentTextSlide").animate(
					{
						"margin-top" : '-='+moveDown+'px'
					}, 
					{			
						complete: function() {
								//alert('pageChunkNumber: '+pageChunkNumber+'; '+$(".pageChunk").filter(".pageChunkCur").index());
								$(".pageChunkCur").removeClass("pageChunkCur").next().addClass("pageChunkCur");
								
								if($(".pageChunkCur").next().height() === null ) {
									$(".curTextDown").unbind('click',handlerDown).addClass("scrollDwDisable");
								} else {
		      				
		      			}
		      		//???	
		      		// it binds each time
		      			$(".curTextUp").bind('click',handlerUp).removeClass("scrollUpDisable");
		      			
		    		}
	    		}
					
				);	  
		};
		var handlerUp = function() {
			alert('up');
		};



		$("#uplaodText").click(function(){
			
			var curText = $(".textUpload").val();
			$(".currentTextSlide").css({'margin-top':'0px'});
			/*
				$(".currentText").text(curText);
				$(".textUpload").val('');
			*/
	    var textObj = {
	    								"data[Text][text]": curText
	    							};			
			
			
				$.ajax({
						type: "POST",
					  url: path+"/texts/textUpload",
	       	 	dataType: "json",
	        	data: textObj,				  
					  success: function(data) {
					    if ( data.stat === 1 ) {
					    	$(".currentTextSlide").empty();
					    	var curTextHeight = 500;
					    	
					    	$.each(data.resText, function(i,v){
					    		
					    		$(".currentTextSlide").append('<div class="pageChunk hide" id="page_'+i+'"></div>');
					    		
					    		var resText = '';
						    		$.each(v,function(k,v2){
						    			resText += '<span class="currentPhrase">'+v2+'.</span> ';
						    		});					    		
					    		$("#page_"+i).html(resText);
									 pageChunkNumber = i+1;
									 
					    	}); 
					    	
								if( pageChunkNumber <= 1 ) {
									$(".curTextUp").unbind('click',handlerUp).addClass("scrollUpDisable");
									$(".curTextDown").unbind('click',handlerDown).addClass("scrollDwDisable");
								} else {
									$(".curTextDown").bind('click',handlerDown).removeClass("scrollDwDisable");
								}
														    	
					    	$(".pageChunk:first").addClass("pageChunkCur").fadeIn();
					  //toFix
					    	var firstCurTextHeight = $(".pageChunk").height();
					    	$(".currentText").height(firstCurTextHeight+20);
					    	
					    	
					    }else{
					    }
					 	},
		        error: function(){
		        		flash_message('Problem with the server. Try again later.','fler');
		            $('.tempTest').html('Problem with the server. Try again later.');
		        }
				});
			
		});
		
		



    $(".currentText").bind('mouseup', function() {
      copy_txt();
		  if (txt_quote !=="") {
		   	$(".cardEditor").fadeIn();
		   	$("#mainWord").text(txt_quote);
		   	$("#contextTran span:last").text(contextCurrent); 
		   }      
      
    });

		
		//$(".curTextDown").bind('click', handlerDown);

		
		$(".currentPhrase").live('mouseover mouseout',function(event){			
			  if (event.type == 'mouseover') {
			    $(this).css({'background-color':'lightGoldenRodYellow'});
			    contextCurrent = $(this).text();
			  } else {
			    $(this).css("background-color","white");
			    contextCurrent = '';
			  }
		});
		








		
});



var contextCurrent = '';
var txt_quote = '';

function copy_txt() {
	// if var txt_quote not empty, clear it.
  txt_quote = "";
  if (window.getSelection) {
     txt_quote = window.getSelection().toString();
  } else if (document.getSelection) {
    txt_quote = document.getSelection();                
  } else if (document.selection) {
    txt_quote = document.selection.createRange().text;
  }  
  
  if (txt_quote !=="") {
   //alert(txt_quote);
   }
  
}

function paste_txt(textarea) {
// \n - перевод на новую строку
   if (txt_quote=="") {
    alert("Для вставки цитаты в новое сообщение \nвыделите нужный текст и нажмите - Вставить цитату");
    } else {
      //document.getElementById(textarea).value += "[q]" + txt_quote + "[/q]\n";
    }
}





$('#clickme').click(function() {
  $('#book').animate(
	  {
	    width: 'toggle',
	    height: 'toggle'
	  },
	  {
	    duration: 5000, 
	    specialEasing: {
	      width: 'linear',
	      height: 'easeOutBounce'
	    }, 
	    complete: function() {
	      $(this).after('<div>Animation complete.</div>');
	    }
	  }
  );
  
});





