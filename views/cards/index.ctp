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
		    
<?php echo $this->element('threewaysMenu/threeways_menu');?>

<?php echo $this->element('theme/theme');?>

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
