		<noscript><div class="span-14">check JavaScript is on</div></noscript>

    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">google.load("language", "1");</script>


<div class="span-14 onlyTest" style="margin:1em;">



	<div class="span-14" style="text-align:center;">
		
		<div id="frontButton" class="frontBack activeSide span-2" style="">
			front
		</div>
		<div id="backButton" class="frontBack  span-2 ">
			back
		</div>
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
					<?php echo $form->button('go',array('class'=>'submitWord') );?>
				</div>
				<div style="float:right;">
					<?php echo $form->button('reset',array('type'=>'reset','style'=>'margin-right:3px;') );?>
				</div>
			<?php echo $form->end();?>
		</div>
	</div>



	<div class="span-14">
		<table class="tableCard" style="">
			<tbody>
				<tr>
					<td class="td" style="width:170px;">
						<div class="mainWord">
						</div>
					</td>
					<td style="width:5px;"></td>
					<td class="td" style="width:170px;">
						<div class="mainTran" id="translation"></div>
						<p class="addit hide" style="">add</p>
						<div class="contextTran" id="contextTran"></div>
					</td>
				</tr>
			</tbody>
		</table>
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
