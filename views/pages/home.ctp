		<noscript><div class="span-14 error" style="background-color:#FBE3E4;border:2px solid  #FBC2C4; margin: 1em;text-align:center;color:#8A1F11;" >check JavaScript is on</div></noscript>
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
		    
<div class="span-15 threeWays">
	<div class="topT">
		<?php echo $html->link(__('Type in word or phrase',true),'#',array('class'=>'threeWaysOne') );?>
	</div>
	<div class="topT">
		<span style="font-style:italic;">or</span>&nbsp;&nbsp;<?php echo $html->link( __('Upload text and select',true), '#');?>
	</div>
	<div class="topT">
		<span style="font-style:italic;">or</span>&nbsp;&nbsp;<?php echo $html->link( __('Print out your set',true), '#');?>
	</div>
</div>

<div class="span-14">Theme: No theme.<?php echo $html->link(__('Create new',true),array("#"));?></div>

<?php echo $this->element('card/card');?>

<?php //echo $this->element('rightSug/right_sug');?>



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
