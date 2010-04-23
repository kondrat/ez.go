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










		
});