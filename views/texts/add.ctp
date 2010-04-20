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


	<div class="span-14" style="margin:1em 0;">	
		<div class="span-8" style="font-size:larger;font-style:italic;">
			<?php __('Copy and paste text you are working on');?>
		</div>
		<div class="span-6 fileTextUploadMenu last" style="font-size:larger;font-style:italic;">
			<span><?php __('or');?></span>&nbsp;<span style="border-bottom:1px dashed;"><?php __('upload text file');?></span>
		</div>
	</div>	
	
	<div class="span-14 fileTextUploadWrapper hide" style="margin-bottom:1em;padding:0.6em;border:1px dashed;">
		<div style="margin-bottom:.5em;">
			<?php echo $form->input('file',array('type'=>'file','class'=>'fileTextUpload','div'=>false,'label'=>false));?>
			<span style="color:gray;margin-left:1em;"><?php __(' only extantions: (*.txt, *.rtf, *.doc)');?></span>
		</div>
		<div>
			<?php echo $form->button(__('Upload file',true));?>
		</div>
	</div>
	<div class="span-14">
		<?php echo $form->textarea('text',array('class'=>'textUpload'));?>
	</div>
	<div class="span-14">
		<?php echo $form->button(__('Upload text',true));?>
		<div class="enlarge" style="float:right;font-size:8pt;">
			<?php echo $html->image('icons/down_arrow.png');?>&nbsp;<span style="vertical-align:top;"><?php __('enlarge');?></span>
		</div>
		
		<div class="decrease hide" style="float:right;font-size:8pt;margin-right:1em;">
			<?php echo $html->image('icons/up_arrow.png');?>&nbsp;<span style="vertical-align:top;"><?php __('decrease');?></span>
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
