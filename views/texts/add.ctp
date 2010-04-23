    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
  		google.load("language", "1");
  		google.setOnLoadCallback(initialize);
  		function initialize() {
  			google.language.getBranding('branding');
  		}
		</script>

<!--<div class="span-24 tempTest" style="text-align:center;margin-top:1em;font-size:larger;color:green;">test</div>-->

<?php echo $this->element('leftSideBar/leftSideBar');?>		    
<div class="span-14">		    
	<?php echo $this->element('threewaysMenu/threeways_menu');?>
	
	<?php echo $this->element('theme/theme');?>

	<div class="span-14 currentText hide.">
		<p style="color:red;">http://www.cp77.byethost32.com/bookjs/how-paste-quote</p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
	</div>


	<?php echo $this->element('fileTextUpload/file_text_upload');?>
		
</div>

<?php echo $this->element('card/card',array('visible'=>false) );?>
