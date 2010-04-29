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
	
<div class="currentTextWrapper">
	<div class="span-8" style="font-style:italic;margin-top:1em;font-weight:bold;">
		<?php __('Select the word you wish to make a card');?>
	</div>
	<div class="pageNumber hide" style="margin-top:1em;float:right;margin-right:50px;">
		page&nbsp;<span>1</span>
	</div>
	<div class="span-14 currentText hide.">
		<div class="currentTextSlide">
		<!--
			It was a time when Zack Morris phone jokes weren't invented yet, but leaving a prototype phone in a bar would have still kicked your professional ass.
			You see, when Cooper was trucking around a cellphone in 1973, it weighed nearly two kilos and cost approximately $1 million for Motorola to produce.
			Battery life was a brisk 20 minutes.
			Order a pizza or do more QA testing?—choices!
			Fast forward to today, and Cooper is put off by the size of a smartphone's instruction manual (often larger and heavier than the phone itself, he says), which he argues can require an engineer's expertise to figure out.
			No bother though, as Cooper predicts that in the not-so-distant future tiny cellphone implants ill deliver calls from mom via the bony spots behind our ears.
		-->		
		</div>
	</div>
	<div class="curTextUpDownSlider">
		<div class="curTextUp"></div>
		<div class="curTextDown"></div>
	</div>
</div>	


	<?php echo $this->element('fileTextUpload/file_text_upload');?>
		
</div>


<?php echo $this->element('card/card',array('visible'=>false) );?>
