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

<div class="span-14">Theme: No theme.<?php echo $html->link(__('Create new',true),array("#"));?></div>

<div class="span-14" style="font-weight:bold;font-size:larger;font-style:italic;">
	<?php __('Copy and paste text you are working on');?>
</div>

<div class="span-14">
	<?php echo $form->textarea('text',array('class'=>'textUpload'));?>
</div>
<div class="span-14" style="font-weight:bold;font-size:larger;font-style:italic;">
	<?php __('Or upload file');?>
</div>
<div class="span-14">
	<?php echo $form->input('file',array('type'=>'file','class'=>'fileTextUpload'));?>
</div>


<?php echo $this->element('card/card',array('visible'=>false) );?>



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
