<div class="span-4" style="min-height:500px;">
	<div class="wordCard" style="margin-top:1em;">
		<?php echo __('Date',true).': '.Date('d.m.Y');?>
	</div>
	
	<ul class="newCards">
		<?php if ( isset($lastCards) && $lastCards != array() ): ?>
			<?php foreach( $lastCards as $lastCard):?>
				<?php echo '<li>'.$lastCard['Card']['word'].'</li>';?>
			<?php endforeach ?>
		<?php endif ?>
	</ul>
	
	
	
</div>

<!-- 
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
-->