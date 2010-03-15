		<noscript><div class="span-14">check JavaScript is on</div></noscript>

    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">google.load("language", "1");</script>

<div class="span-14 twoWays">
	<div class="span-6 prepend-1">
		<?php __('Type in word or short phrase');?>
	</div>
	<div class="span-6">
		<?php echo $html->link( __('or Upload text and select',true), '#');?>
	</div>
</div>
<div class="span-14 onlyTest" style="margin:1em;">



	<div class="span-14" style="text-align:center;padding-bottom:.5em;">
		
		<div class="plusMenu span-2">
			+ transl
		</div>
		<div class="plusMenu span-2">
			+ definition
		</div>
		<div class="plusMenu span-2">
			+ example
		</div>
		<div class="plusMenu span-2">
			+ synonim
		</div>
		<div class="plusMenu span-2 last">
			+ context
		</div>
		
	</div>
	
	<div class="span-14" style="margin-bottom:1em;background-color:#C3D9FF; -moz-border-radius: 10px; -moz-box-shadow:0px 0px 5px black;">
		<div style="padding:1em; float:left;">
			<?php echo $form->create('Card');?>
				<div class="userAction" style="float:left;border-bottom:1px dotted brown;color:brown;font-weight:bold;"><?php __('Enter word or short phrase');?></div>
				<?php echo $form->input('ext',array('label'=>false ) );?>
	
				<div style="float:right;">
					<?php echo $form->button(__('Insert',true),array('class'=>'submitWord') );?>
				</div>
				<div style="float:right;">
					<?php echo $form->button('reset',array('type'=>'reset','style'=>'margin-right:3px;') );?>
				</div>
			<?php echo $form->end();?>
		</div>
		
		<div class="frontBackSwitcher">
			<div id="frontButton" class="frontBack activeSide span-2 last" style="">
				<?php __('front');?>
			</div>
			<div id="backButton" class="frontBack  span-2 last">
				<?php __('back');?>
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
					<table class="innerTable">
						<tr>
							<td><div class="ctrlPanelWrapper"><div class="ctrlPanel"><?php echo $html->image('icons/edit.png');?>&nbsp;&nbsp;<?php echo $html->image('icons/delete.png');?></div></div></td>
						</tr>
						<tr style="height:160px;">
							<td>table first</td>
						</tr>
						<tr><td></td></tr>
					</table>
				</td>
				<td class="td">table first</td>
			</tr>
			<tr>
				<td>table first</td>
				<td>table first</td>
				<td>table first</td>
			</tr>
		</tbody>
	</table>

</div>
