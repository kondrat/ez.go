<?php 
	$classHide = null;
	if( isset($visible) && $visible == false ) {
		$classHide = 'hide';
	} 
?>

<div class="span-16 cardEditor <?php echo $classHide;?>" style="-moz-border-radius:15px;-moz-box-shadow:0 0 7px gray;">
	<div class="span-16">
		<div class="span-16 plusMenuWrapper" style="">
		
			<div class="span-16" style="text-align:center;padding-bottom:.5em;">
				<div class="plusMenuFront plusMenuWord" title="<?php __('Enter word or short phrase');?>">
					+ <?php __('word');?>
				</div>	
				
				<div class="plusMenuFront plusMenuTest" title="<?php __('Enter test phrase');?>">
					+ <?php __('test');?>
				</div>		
			
				<div class="plusMenuBack plusMenuTransl" title="<?php __('Enter translation of word');?>">
					+ <?php __('transl');?>
				</div>
				<div class="plusMenuBack plusMenuExample" title="<?php __('Enter an example usage  of word');?>">
					+ <?php __('example');?>
				</div>
				<div class="plusMenuBack plusMenuDefin" title="<?php __('Enter definition of word');?>">
					+ <?php __('definition');?>
				</div>
				<div class="plusMenuBack plusMenuSynonim" title="<?php __('Enter an synonims of word');?>">
					+ <?php __('synonim');?>
				</div>
				
			</div>
			
		</div>
			
		<div class="span-16 panelTopWrapper" style="">
		    <div class="panelTop" style="">
			    
				    <?php echo $form->create('Card');?>
					    <div class="userActionWrapper" style="float:left;">
						    <a href="#" class="sideToEdit hide" style="" onclick="return false"><?php __('Side A');?>:</a>
						    <a href="#" class="sideToEdit hide" style="" onclick="return false"><?php __('Side B');?>:</a>
						    <span class="userActions userAction" style=""></span>
					    </div>
					    <div style="float:right;" class="quickMode">
					      <?php __('Quick mode');?>
					      <?php echo $form->checkbox('Quick',array('checked'=>true) );?>
					    </div>
					
					    <?php echo $form->input('ext',array('label'=>false , "tabindex"=>"1") );?>
		
					    <div style="float:right;">
						    <?php echo $form->button(__('Insert in card',true),array('id'=>'submitWrodId','class'=>'submitWord',"tabindex"=>"3","onclick"=>"return false;") );?>
					    </div>
					    <div style="float:right;margin-right: 1em;">
						    <?php //echo $html->link(__('Clean up',true),array() );?>
						    <?php echo $form->button(__('Translate',true),array('id'=>'submitTranslId','style'=>'margin-right:3px;',"tabindex"=>"2","onclick"=>"return false;") );?>
					    </div>
				    <?php echo $form->end();?>
				    
				    <div class="langToFromWrapper" style="">
				    
				        <div class="langToFrom">			          
				      	  <span id="langFrom">en</span>
				      	</div>
				      	<div class="langSwitch"></div>
				      	<div class="langToFrom">				      	  
				      	  <span id="langTo">ru</span>
				      	</div>
				      	
				      	  <div class="langTable hide" style="">	
				      	  	<?php echo $this->element("langSwitcher/lang_switcher");?>		    	  	    	  
				      	  </div>			    	  
				    </div>

			    
			  </div>
		</div>
	
	
	
		<div class="span-16">
			
			<div id="tableFront" class="span-8" style="position:relative;">
					<table class="tableCard" style="">
						<tbody>
							<tr>
								<td class="td activeTside" style="">
									<div class="frontSideWrapper">
										<div id="mainWord" class="mainWord inputSring"></div>
									</div>
									<div class="tableTheme">
										<span class="themePrefixCard"><?php __('Theme');?>: </span>
										<span class="themeNameCard">Theme 1</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div id="frontButton" class="frontBack" style=""><?php echo $html->link(__('Side A',true),array('#'),array('onclick'=>'return false' ) );?></div>
			</div>
			
			<div id="tableBack" class="span-8 last" style="position:relative;">				
					<table class="tableCard" style="">
						<tbody>
							<tr>
								<td class="td" style="">
									<div class="backSideWrapper">
										<div class="mainTran" id="translation"></div>
										<div class="contextTran" id="contextTran"><span class="perfix">[con]:&nbsp;</span><span></span></div>
										<div class="definTran" id="definTran"><span class="perfix">[def]:&nbsp;</span><span></span></div>
										<div class="synonimTran" id="synonimTran"><span class="perfix">[syn]:&nbsp;</span><span></span></div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div id="backButton" class="frontBack"><?php echo $html->link(__('Side B',true),array('#'),array('onclick'=>'return false' ) );?></div>
			</div>
			
		</div>

		<div class="span-16 panelBottomWrapper" style="">
		    <div class="panelBottom" style="">
		      <div id="playSound" class="sound"></div>
		      <div class="wordToSound"><?php __('No sound');?></div>
			    <?php echo $form->button(__('Save Card',true),array('id'=>'saveCardMain') );?>
			    <div id='branding' style="position:absolute;top:13px; right:0;margin-right:1em;"> </div>
			  </div>
		</div>
	</div>
		<?php echo $this->element('cardEditor/rightSug/right_sug');?>
		<!--
		<div class="test">
			<div class="fancy_bg fancy_bg_n"></div>
			<div class="fancy_bg fancy_bg_ne"></div>
			<div class="fancy_bg fancy_bg_e"></div>
			<div class="fancy_bg fancy_bg_se"></div>
			<div class="fancy_bg fancy_bg_s"></div>
			<div class="fancy_bg fancy_bg_sw"></div>
			<div class="fancy_bg fancy_bg_w"></div>
			<div class="fancy_bg fancy_bg_nw"></div>
		</div>
		-->		
		<div class="closeCardTable" style=""></div>
		<div class="hideArrow hide" style=""></div>
		<div class="moveCardTable" style=""></div>
		
</div>									
