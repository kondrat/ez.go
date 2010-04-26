$(document).ready( function(){

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



		$("#uplaodText").click(function(){
			var curText = $(".textUpload").val();
			$(".currentText").text(curText);
			$(".textUpload").val('');
		});
		
		$(".textUpload").select(function(){
			alert($(this).toSource() );
		});



    $(".currentText").bind('mouseup', function() {
      copy_txt();
		  if (txt_quote !=="") {
		   	$(".cardEditor").fadeIn();
		   	$("#mainWord").text(txt_quote);
		   	$("#contextTran span:last").text(contextCurrent); 
		   }      
      
    });

		var currText2 = $(".currentText").text();
		
		var re2 =  /.+[\.|\?|!]\s+/g;  //'(?sx-m)[^\r\n].*?(?:(?:\.|\?|!)\s)'; 		
		found = currText2.match(re2);		
		var phr = '';
		$.each(found,function(key, val){
			phr += '<span class="currentPhrase">'+val+'</span>';		
		});
		
		
		
		$(".currentText").html(phr);
		
		
		$(".currentPhrase").live('mouseover mouseout',function(event){			
			  if (event.type == 'mouseover') {
			    $(this).css({'background-color':'#ddd'});//'lightGoldenRodYellow'});
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











