    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">google.load("language", "1");</script>



<div class="span-14 onlyTest" style="margin:1em;">

<div class="span-7" style="margin-bottom:1em;">
	<?php echo $form->create('User');?>
		<?php echo $form->input('word',array('label'=>__('Word or short phrase',true) ) );?>
		<?php echo $form->button('go',array('class'=>'submitWord') );?>
	<?php echo $form->end();?>
</div>
<div class="span-7 last" style="margin-bottom:1em;">
	<?php echo $form->create('User');?>
		<?php echo $form->input('translate', array('label'=>__('Translation',true) ));?>
		<?php echo $form->button('go',array('class'=>'submitTranslate') );?>
	<?php echo $form->end();?>
</div>
<div class="span-14" style="">
	<div class="prepend-4 span-2">
		+ def
	</div>
	<div class="span-2">
		+ ex
	</div>
	<div class="span-2">
		+ syn
	</div>
	<div class="span-2">
		+ context
	</div>
</div>
<div class="span-12" style="margin-bottom:1em;">
	<?php echo $form->create('User');?>
		<?php echo $form->input('ext',array('label'=>false ) );?>
		<?php echo $form->button('go',array('class'=>'submitMore') );?>
	<?php echo $form->end();?>
</div>
<div class="span-14">
	<table class="tableCard" style="">
		<thead>
			<tr>
				<th>front side</th>
				<th></th>
				<th>back side</th>
			</tr>
		</thead>
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
