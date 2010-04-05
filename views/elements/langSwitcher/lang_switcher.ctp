  	<?php 
  		$sideA = array(
	"en" => __("English",true),
	"ru" => __("Russian",true),
	"fr" => __("French",true),

	"af" => __("Afrikaans",true),
	"sq" => __("Albanian",true),
	"ar" => __("Arabic",true),
	"be" => __("Belarusian",true),
	"bg" => __("Bulgarian",true),
	"ca" => __("Catalan",true),
	"zh-CN" => __("Chinese",true),
	"hr" => __("Croatian",true),
	"cs" => __("Czech",true),
	"da" => __("Danish",true),
	"nl" => __("Dutch",true),
	"en" => __("English",true),
	"et" => __("Estonian",true),
	"tl" => __("Filipino",true),
	"fi" => __("Finnish",true),
	"fr" => __("French",true),
	"gl" => __("Galician",true),
	"de" => __("German",true),
	"el" => __("Greek",true),
	"ht" => __("Haitian Creole ALPHA",true),
	"iw" => __("Hebrew",true),
	"hi" => __("Hindi",true),
	"hu" => __("Hungarian",true),
	"is" => __("Icelandic",true),
	"id" => __("Indonesian",true),
	"ga" => __("Irish",true),
	"it" => __("Italian",true),
	"ja" => __("Japanese",true),
	"ko" => __("Korean",true),
	"lv" => __("Latvian",true),
	"lt" => __("Lithuanian",true),
	"mk" => __("Macedonian",true),
	"ms" => __("Malay",true),
	"mt" => __("Maltese",true),
	"no" => __("Norwegian",true),
	"fa" => __("Persian",true),
	"pl" => __("Polish",true),
	"pt" => __("Portuguese",true),
	"ro" => __("Romanian",true),
	"ru" => __("Russian",true),
	"sr" => __("Serbian",true),
	"sk" => __("Slovak",true),
	"sl" => __("Slovenian",true),
	"es" => __("Spanish",true),
	"sw" => __("Swahili",true),
	"sv" => __("Swedish",true),
	"th" => __("Thai",true),
	"tr" => __("Turkish",true),
	"uk" => __("Ukrainian",true),
	"vi" => __("Vietnamese",true),
	"cy" => __("Welsh",true),
	"yi" => __("Yiddish",true)  				
  		);
  	?>  


  <div class="span-10" style="position:relative;">  	
    <div class="span-5"><?php echo $form->input('sideA', array('label'=>__('Side A',true)."<hr />",'options' => $sideA)); ?></div>
    <div class="span-5 last"><?php echo $form->input('sideB', array('label'=>__('Side B',true)."<hr />",'options' => $sideA)); ?></div>
    <hr />
    <div><?php echo $form->button(__("OK",true));?></div>
    <div class="closeLangTable"></div>		    	  
  </div>			    	  	