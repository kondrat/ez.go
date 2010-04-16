//theme editing
$(document).ready( function(){
	
	
	themeName = $(".themeName");
	themeName.data(currentTheme);
	delete currentTheme;
	//alert(themeName.data().toSource());

	var themeNameText = $.trim(themeName.text());
		
	var saveTheme = $(".saveTheme");	
	var editCreateTheme = $(".editCreateTheme");
	
	$(".leftSideTheme").text(themeNameText);
	
	
	$(".editTheme").click(function(){		
		themeName.empty().hide();
		editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val(themeNameText);
		
	});

	$(".createNewTheme").click(function(){		
		themeName.empty().hide();
		editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val('');
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
			$(".themeNameCard,.leftSideTheme").text(themeNameText);
			
			//if user regged we update the theme;
			if(userReg) {
				var themeObj = {
												"data[Theme][theme]": themeNameText,
												"data[Theme][id]": themeName.data('id'),
											};
	      $.ajax({
	        type: "POST",
	        url: path+"/themes/updateTheme",
	        dataType: "json",
	        data: themeObj,
	        success: function(data) {
						
	        	if ( data.stat === 1 ) {        		
							themeName.data('theme',data.theme);							
							
							//alert(themeName.data().toSource());
	          } else {
	          	
	          }
	        },
	        error: function(){
	            $('.tempTest').html('Problem with the server. Try again later.');
	        }
	      });				
			}
		});

	});

	
});