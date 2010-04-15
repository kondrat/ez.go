<div class="span-14" style="">
	<div style="position:relative;">
		<span class= "themePerfix" style="color:gray;font-size:8pt;font-style:italic;">theme:</span> 
		<span class= "themeName" style="">
			<?php if(isset($curTheme) && $curTheme != array()):?>
				<?php echo $curTheme['0']['Theme']['theme'].' - test';?>
			<?php else: ?>
				Theme 1
			<?php endif ?>
		</span>
		&nbsp;
		<span class="editCreateTheme" >
			<?php echo $html->link(__('Edit',true),array("#"),array('class'=>'editTheme','onclick'=>'return false') );?>&nbsp;
			<?php echo $html->link(__('Create new',true),array("#"),array('class'=>'createNewTheme','onclick'=>'return false'));?>
		</span>
		
		<div class="saveTheme hide" style="">
			<?php echo $form->input("themeEdit",array('label'=>false,'div'=>false,'class'=>'') );?>
			<?php echo $form->button(__('Save',true),array('id'=>'saveThemeSave'));?>&nbsp;
			<?php echo $form->button(__('Cancel',true),array('id'=>'saveThemeCancel') );?>
		</div>
	</div>
</div>