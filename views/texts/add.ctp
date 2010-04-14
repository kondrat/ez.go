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


	
	<div class="span-8" style="font-weight:bold;font-size:larger;font-style:italic;">
		<?php __('Copy and paste text you are working on');?>
	</div>
	<div class="span-6 fileTextUploadMenu last" style="font-weight:bold;font-size:larger;font-style:italic;">
		<?php __('Or upload text file');?>
	</div>
	<div class="span-14 fileTextUploadWrapper hide">
		<?php echo $form->input('file',array('type'=>'file','class'=>'fileTextUpload'));?>
	</div>
	<div class="span-14">
		<?php echo $form->textarea('text',array('class'=>'textUpload'));?>
	</div>
	<div class="span-14">
		<?php echo $form->button(__('Upload text',true));?>
		<div class="enlarge" style="float:right;font-size:8pt;">
			<?php __('enlarge');?>
		</div>
		
		<div class="decrease hide" style="float:right;font-size:8pt;margin-right:1em;">
			<?php __('decrease');?>
		</div>		
	</div>
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
