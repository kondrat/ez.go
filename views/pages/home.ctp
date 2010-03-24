		<noscript><div class="span-14 error" style="background-color:#FBE3E4;border:2px solid  #FBC2C4; margin: 1em;text-align:center;color:#8A1F11;" >check JavaScript is on</div></noscript>
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
  		google.load("language", "1");
  		google.setOnLoadCallback(initialize);
  		function initialize() {
  			google.language.getBranding('branding');
  		}
		</script>



<div class="span-15 twoWays">
	<div class="topT">
		<?php echo $html->link(__('Type in word or phrase',true),'#');?>
	</div>
	<div class="topT">
		<span style="font-style:italic;">or</span>&nbsp;&nbsp;<?php echo $html->link( __('Upload text and select',true), '#');?>
	</div>
	<div class="topT">
		<span style="font-style:italic;">or</span>&nbsp;&nbsp;<?php echo $html->link( __('Print out your set',true), '#');?>
	</div>
</div>


<div class="span-14 onlyTest" style="">

	<div class="span-14" style="text-align:center;padding-bottom:.5em;">
		
		<div class="plusMenu">
			+ transl
		</div>
		<div class="plusMenu">
			+ definition
		</div>
		<div class="plusMenu">
			+ example
		</div>
		<div class="plusMenu">
			+ synonim
		</div>
		<div class="plusMenu">
			+ context
		</div>
		
	</div>
	
	<div class="span-14" style="margin-bottom:1em;background-color:#C3D9FF; -moz-border-radius: 10px; -moz-box-shadow:0px 0px 5px black;">
		<div style="padding:1em; float:left;">
			<?php echo $form->create('Card');?>
			
				<div class="userAction" style="float:left;border-bottom:1px dotted brown;color:brown;font-weight:bold;"><?php __('Enter word or short phrase');?></div>
				<div style="float:right;" class="quickMode">
				  <?php __('Quick mode');?>
				  <?php echo $form->checkbox('One',array('checked'=>true) );?>
				</div>
				
				<?php echo $form->input('ext',array('label'=>false ) );?>
	
				<div style="float:right;">
					<?php echo $form->button(__('Insert',true),array('id'=>'submitWrodId','class'=>'submitWord') );?>
				</div>
				<div style="float:right;margin-right: 1em;">
					<?php echo $html->link(__('Clean up',true),array() );?>
					<?php //echo $form->button(__('Reset',true),array('type'=>'reset','style'=>'margin-right:3px;') );?>
				</div>
			<?php echo $form->end();?>
			<div style="float:left;margin:0 1em;font-weight:bold;"><span id="langFrom">en</span><?php echo $html->image('icons/ajax-loader1-stat.png',array('class'=>'langSwitch','style' => "") );?><span id="langTo">ru</span></div>
		</div>
		
	</div>



	<div class="span-14">
		<div id="tableFront" class="span-7" style="position:relative;">
				<table class="tableCard" style="">
					<tbody>
						<tr>
							<td class="td activeTside" style="">
								<div class="mainWord">
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div id="frontButton" class="frontBack" style="">
					<?php echo $html->link(__('front side',true),array('#'),array('onclick'=>'return false' ) );?></a>
				</div>
		</div>
		<div id="tableBack" class="span-7 last" style="position:relative;">
				<table class="tableCard" style="">
					<tbody>
						<tr>
							<td class="td" style="">
								<div class="mainTran" id="translation"></div>
								<p class="addit hide" style="">add</p>
								<div class="contextTran" id="contextTran"></div>
							</td>
						</tr>
					</tbody>
				</table>
				<div id="backButton" class="frontBack">
					<?php echo $html->link(__('back side',true),array('#'),array('onclick'=>'return false' ) );?></a>
				</div>
		</div>
	</div>

	<div class="span-14" style="margin-bottom: 1em; background-color: rgb(195, 217, 255); -moz-border-radius: 10px; -moz-box-shadow: 0px 0px 5px black;text-align:center; padding:.5em 0;position:relative;">
	  <div id="playSound" class="sound"></div>
		<?php echo $form->button(__('Save Card',true) );?>
		<div id='branding' style="position:absolute;top:10px; right:0;margin-right:1em;"> </div>
	</div>
									
</div>



<div class="span-6 last rightSug hide">
  <div class="rightHead">
    <?php __('Just click on what you need');?>
   </div>
	<div id="rightSugTabs" style="">
		<ul class="rSugTabs">		
			<li class="noun dicSwBase"><?php __('Noun');?></li>
			<li class="verb dicSwBase"><?php __('Verb');?></li>
			<li class="adjective dicSwBase"><?php __('Adjec');?></li>
			
			<li class="adverb dicSwBase"><?php __('Adverb');?></li>	
			<li class="pronoun dicSwBase"><?php __('Pronoun');?></li>
			<li class="conjunction dicSwBase"><?php __('Conjunction');?></li>
			<li class="preposition dicSwBase"><?php __('Preposition');?></li>
			<li class="article dicSwBase"><?php __('Article');?></li>
			<li class="numeral dicSwBase"><?php __('Numeral');?></li>	
		</ul>
		<br />
		<div class="dicTerms">
      <ul class="nounTerms"> </ul>	
      <ul class="verbTerms hide"> </ul>
      <ul class="adjectiveTerms hide"> </ul>
      
      <ul class="adverbTerms hide"> </ul>
      <ul class="pronounTerms hide"> </ul>
      <ul class="conjunctionTerms hide"> </ul>
      <ul class="prepositionTerms hide"> </ul>
      <ul class="articleTerms hide"> </ul>
      <ul class="numeralTerms hide"> </ul>			
		</div>

	</div>
</div>



<div class="span-20 last">
	<!--
	<table class="tableCard" style="">
		<tbody>
			
			<tr>
				<td class="td">
					<div class="cardInner">
						<div class="man">
							table first
						</div>
					</div>
				</td>
				<td class="td">
					<table>
						<tr>
							<td><div class="ctrlPanelWrapper"><div class="ctrlPanel"><?php echo $html->image('icons/edit.png');?>&nbsp;&nbsp;<?php echo $html->image('icons/delete.png');?></div></div></td>
						</tr>
						<tr>
							<td>table first</td>
						</tr>
						<tr><td></td></tr>
					</table>
				</td>
				<td class="td">table first</td>
			</tr>

		</tbody>
	</table>
	-->

</div>
