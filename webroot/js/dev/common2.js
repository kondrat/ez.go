//theme editing
$(document).ready( function(){
	
	var themeAction = 'edit';
	//themeName defined in vars.js
	themeName = $(".themeName");	
	var themeNameText = $.trim(themeName.text());
	
	
	if ( currentTheme.theme === undefined ) {
		currentTheme.theme = themeNameText;
	}
	themeName.data(currentTheme);
	delete currentTheme;



		
	var saveTheme = $(".saveTheme");
	var selectTheme = $(".selTheme");	
	var editCreateTheme = $(".editCreateTheme");
	
	$(".leftSideTheme,.themeNameCard").text(themeNameText);
	
	
	$(".editTheme").click(function(){	
		themeAction = 'edit';	
		themeName.empty().hide();
		editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val(themeNameText);
		
	});

	$(".createNewTheme").click(function(){
		themeAction = 'create';		
		themeName.empty().hide();
		editCreateTheme.hide();		
		saveTheme.fadeIn();
		$("#themeEdit").val('');
	});

	$(".selectTheme").click(function(){	
		themeName.empty().hide();
		editCreateTheme.hide();		
		selectTheme.fadeIn();
		
	});

	$("#saveThemeCancel").click(function(){	
		saveTheme.fadeOut();
		themeName.text(themeNameText).show();
		editCreateTheme.show();
	});
	$("#selThemeCancel").click(function(){	
		selectTheme.fadeOut();
		themeName.text(themeNameText).show();
		editCreateTheme.show();
	});
	
	
	
	$("#saveThemeSave").click(function(){
		saveTheme.fadeOut(function() {
			themeNameText = $.trim($("#themeEdit").val());
			themeName.text(themeNameText).show();
			editCreateTheme.show();
			$(".themeNameCard,.leftSideTheme").text(themeNameText);
			
			//if user regged we update the theme;
			if(userReg) {
				var themeObj;
				switch (themeAction) {
					case 'edit':
				 		themeObj = {
												"data[Theme][theme]": themeNameText,
												"data[Theme][id]": themeName.data('id')
											};
						break;
					case 'create':
				 		themeObj = {
												"data[Theme][theme]": themeNameText
											};
						break;						
																	
				}

	      $.ajax({
	        type: "POST",
	        url: path+"/themes/updateTheme",
	        dataType: "json",
	        data: themeObj,
	        success: function(data) {
						
	        	if ( data.stat === 1 ) {        		
							themeName.data('theme',data.theme);							
							if(themeAction === 'create'){
								themeName.data('id',data.themeId);
								$("ul.newCards").empty();
								$("#themeSelect").append('<option value="'+data.themeId+'">'+data.theme+'</option>');
							} else if(themeAction === 'edit') {
								//to finish. update the themeName in the select
							}
								
							
							//alert(themeName.data().toSource());
	          } else {
	          	
	          }
	        },
	        error: function(){
	            $('.tempTest').html('Problem with the server. Try again later.');
	        }
	      });				
			} else {
				themeName.data('theme', themeNameText );
			}
		});

	});


	
	$("#themeSelect option").click(function(){
		//alert($(this).val()+' | '+$(this).text() );
		var selectedTheme = $(this).text();
		var selcetedId = $(this).val();
		selectTheme.fadeOut(function() {
			themeNameText = selectedTheme;
			themeName.text(themeNameText).show();
			editCreateTheme.show();
			$(".themeNameCard,.leftSideTheme").text(themeNameText);
			
			
			var prevSelectedId = themeName.data('id');
			themeName.data('theme',themeNameText);
			themeName.data('id',selcetedId);
			//alert(themeName.data().toSource());
			if( prevSelectedId != themeName.data('id') ) {
				$("ul.newCards").empty();
				var themeObj = {
												//"data[Theme][theme]": themeName.data('theme'),
												"data[Theme][id]": themeName.data('id')
											};
				
	      $.ajax({
	        type: "POST",
	        url: path+"/themes/selTheme",
	        dataType: "json",
	        data: themeObj,
	        success: function(data) {
						
	        	if ( data.stat === 1 ) {        		
							$.each(data.cards, function(key, val) {
								$("ul.newCards").append('<li>'+val.Card.word+'</li>');
							});
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
