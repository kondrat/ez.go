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
      //alert('over');
      copy_txt();
    });
/*
    $(".currentText").click( function() {
      copy_txt();
    });
*/



		
});


var txt_quote="";

function copy_txt() {
// Если переменная txt_quote не пустая, то очищаем её
   txt_quote = "";
  if (window.getSelection) {
     txt_quote = window.getSelection().toString();
  } else if (document.getSelection) {
    txt_quote = document.getSelection();                
  } else if (document.selection) {
    txt_quote = document.selection.createRange().text;
  }  
  
  if (txt_quote !=="") {
   alert(txt_quote);
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











