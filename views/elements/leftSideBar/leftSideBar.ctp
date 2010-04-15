<div class="span-4" style="min-height:500px;">
	<div class="wordCard" style="margin-top:1em;">
		<?php echo __('Date',true).': '.Date('d.m.Y');?>
	</div>

	<?php if ( isset($curTheme) && $curTheme != array() ): ?>	
		
			<div class="currentTheme"><?php echo $curTheme['0']['Theme']['theme'];?></div>
			<ul class="newCards">
				<?php foreach( $curTheme['0']['Card'] as $lastCard):?>
					<?php echo '<li>'.$lastCard['word'].'</li>';?>
				<?php endforeach ?>						
			</ul>
	<?php endif ?>	
	
</div>

<!-- 
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
-->
