//theme editing
$(document).ready( function(){

	var themeName = $(".themeName");
	var themeNameText = themeName.text();
	
	var saveTheme = $(".saveTheme");	
	var editCreateTheme = $(".editCreateTheme");
	
	$(".editTheme").click(function(){		
		themeName.empty().hide();
		editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val(themeNameText);
	});

	$("#saveThemeCancel").click(function(){	
		saveTheme.fadeOut();
		themeName.text(themeNameText).show();
		editCreateTheme.show();
	});
	
	$("#saveThemeSave").click(function(){
		saveTheme.fadeOut(function() {
			themeNameText = $("#themeEdit").val();
			themeName.text(themeNameText).show();
			editCreateTheme.show();
			$(".themeNameCard").text(themeNameText);
		});

	});

	
});