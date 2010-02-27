<div class="span-14 onlyTest">
	only test
</div>
<div class="span-15">
	<div class="signUpNow">
		<?php if(!$this->Session->read('Auth.User.id') ): ?>
			<?php echo $html->link(__('Sign Up now',true), array('controller'=>'users','action'=>'reg') );?>
		<?php endif ?>
	</div>
	<div class="signUpNow">
		<?php if(!$this->Session->read('Auth.User.id') ): ?>
			<?php echo $html->link(__('LogIn now',true), array('controller'=>'users','action'=>'login') );?>
		<?php else: ?>
			<?php echo $html->link(__('LogOut now',true), array('controller'=>'users','action'=>'logout') );?>
		<?php endif ?>
	</div>	
</div>
