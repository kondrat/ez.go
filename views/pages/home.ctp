		<noscript><div class="span-14 error" style="background-color:#FBE3E4;border:2px solid  #FBC2C4; margin: 1em;text-align:center;color:#8A1F11;" >check JavaScript is on</div></noscript>



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
					<?php echo $form->button(__('Insert',true),array('class'=>'submitWord') );?>
				</div>
				<div style="float:right;">
					<?php echo $form->button(__('Reset',true),array('type'=>'reset','style'=>'margin-right:3px;') );?>
				</div>
			<?php echo $form->end();?>
		</div>
		
		<div class="frontBackSwitcher">
			<div id="frontButton" class="frontBack activeSide" style="">
				<?php __('front side');?>
			</div>
			<div id="backButton" class="frontBack">
				<?php __('back side');?>
			</div>
		</div>		
		
	</div>



	<div class="span-14">
		<div id="tableFront" class="span-7">
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
		</div>
		<div id="tableBack" class="span-7 last">
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
		</div>
	</div>

	<div class="span-14" style="margin-bottom: 1em; background-color: rgb(195, 217, 255); -moz-border-radius: 10px; -moz-box-shadow: 0px 0px 5px black;text-align:center; padding:.5em 0;">
		<?php echo $form->button(__('Save Card',true) );?>
	</div>
									
</div>

<div class="span-6 last rightSug">
  <div class="rightHead">
    <?php __('Just click on what you need');?>
   </div>
	<div style="padding:15px;">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
	</div>
</div>

<div class="span-20 last">
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

</div>
